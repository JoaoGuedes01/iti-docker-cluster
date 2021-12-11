const connectDB = require('./config/connection');
const Post = require('./models/Post')
const express = require('express');
const app = express();
app.use(express.json());

connectDB();

let serverNumber = process.argv.slice(2)[0];

app.get('/', (req, res) => {
    res.cookie('server',serverNumber);
    res.sendFile(__dirname + '/html/index.html');
});

app.get('/CreatePost', (req, res) => {
    res.sendFile(__dirname + '/html/createPost.html');
});

app.get('/Posts', (req, res) => {
    res.sendFile(__dirname + '/html/viewPosts.html');
});

app.post('/createPost', async (req, res) => {
    let data = {
        username: req.body.username,
        content: req.body.content
    }
    const newPost = new Post(data);
    const savedPost = await newPost.save();
    if(!savedPost) return res.send({status:500,msg:'There was an error'});
    return res.send({status:200,msg:'Post saved to database', post: savedPost});
})

app.get('/getPosts',async(req,res)=>{
    const posts = await Post.find();

    return res.send({
        posts: posts
    });
})

app.listen(3000, () => {
    console.log("Server running in port 3000");
})
