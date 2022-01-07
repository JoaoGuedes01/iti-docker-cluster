const connectDB = require('./config/connection');
const Post = require('./models/Post')
const express = require('express');
const app = express();
app.use(express.json());

connectDB();

const getIP = () => {
    var address,
        ifaces = require('os').networkInterfaces();
    for (var dev in ifaces) {
        ifaces[dev].filter((details) => details.family === 'IPv4' && details.internal === false ? address = details.address : undefined);
    }
    return address;
}

let serverIP = getIP();
console.log(serverIP);

let systemStats = {
    "IP": serverIP,
    "counterRaiz": 0,
    "counterFrontendCreatePost": 0,
    "counterFrontendPosts": 0,
    "counterBackendCreatePost": 0,
    "counterBackendGetPosts": 0
}

app.get('/systemStats', (req, res) => {
    return res.send(systemStats);
})

app.get('/', (req, res) => {
    res.cookie('server', serverIP);
    systemStats.counterRaiz += 1;
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/CreatePost', (req, res) => {
    systemStats.counterFrontendCreatePost += 1;
    res.sendFile(__dirname + '/html/createPost.html');
});

app.get('/Posts', (req, res) => {
    systemStats.counterFrontendPosts += 1;
    res.sendFile(__dirname + '/html/viewPosts.html');
});

app.post('/createPost', async (req, res) => {
    let data = {
        username: req.body.username,
        content: req.body.content
    }
    const newPost = new Post(data);
    const savedPost = await newPost.save();
    systemStats.counterBackendCreatePost += 1;
    if (!savedPost) return res.send({ status: 500, msg: 'There was an error' });
    return res.send({ status: 200, msg: 'Post saved to database', post: savedPost });
})

app.get('/getPosts', async (req, res) => {
    const posts = await Post.find();
    systemStats.counterBackendGetPosts += 1;
    return res.send({
        posts: posts
    });
})




app.listen(3000, () => {
    console.log("Server running in port 3000");
})
