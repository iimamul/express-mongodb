const express= require('express');
const { restart } = require('nodemon');
const router = express.Router();
const Post = require('../models/Post')

//Routes
//reveal on http://localhost:5000/posts
//Gets back all the post
router.get('/',async (req,res)=>{
    try{
        const posts= await Post.find()
        res.json(posts)
    }
    catch(err){
        res.json({message:err})
    }
})

//  http://localhost:5000/posts/post99
router.get('/post99',(req,res)=>{
    res.send('Here is the posts 99')
})

//SUBMITS A POST
router.post('/',(req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    post.save()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            res.json({message:err})
        })
})

//GET SPECIFIC POST
router.get('/:postId',async (req,res)=>{
    try{
        // console.log(req.params.postId)
        const post=await Post.findById(req.params.postId)
        res.json(post)
    }
    catch(err){
        res.json({message:err})
    }
})

//DELETE POST
router.delete('/:postId',async (req,res)=>{
    try{
        // console.log(req.params.postId)
        const removePost=await Post.remove({_id: req.params.postId})
        res.json(removePost)
    }
    catch(err){
        res.json({message:err})
    }
})

//UPDATE A POST
router.patch('/:postId',async (req,res)=>{
    try{
        // console.log(req.params.postId)
        const updatePost=await Post.updateOne({_id: req.params.postId},{$set:{title:req.body.title}})
        res.json(updatePost)
    }
    catch(err){
        res.json({message:err})
    }
})


module.exports= router