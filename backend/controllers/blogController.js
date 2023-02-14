const { default: mongoose } = require('mongoose');
const Blog = require('../models/blogModel');

//get all blogs
exports.get_all_blogs = async (req,res) => {
    try{
        const blogs = await Blog.find().sort({createdAt: -1})
        res.status(200).json({blogs})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//post a new blog
exports.post_a_blog = async (req,res) => {
    try{
        const {title, snippet, body} = req.body;
        if(!title || !snippet || !body){
            return res.status(400).json({
                error: 'All fields are required'
            })
        }
        const blog = await Blog.create({title, snippet, body})
        res.status(200).json({blog})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//get a single blog
exports.get_a_blog = async (req,res) => {
    try{
        const id = req.params.id
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: "Id is not valid"
            })
        }

        const blog = await Blog.findById({_id: id})
        if(!blog){
            return res.status(404).json({
                error: 'Blog not found'
            })
        }

        res.status(200).json({blog})
    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//update a single blog
exports.update_a_blog = async (req,res) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: "Id is not valid"
            })
        }

        const blog = await Blog.findByIdAndUpdate({_id: id}, {
            ...req.body
        })
        if(!blog){
            return res.status(404).json({
                error: 'Blog not found'
            })
        }

        res.status(200).json({blog})

    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}

//delete a blog
exports.delete_a_blog = async (req,res) => {
    try{
        const id = req.params.id
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                error: "Id is not valid"
            })
        }

        const blog = await Blog.findByIdAndDelete({_id: id})
        if(!blog){
            return res.status(404).json({
                error: 'Blog not found'
            })
        }

        res.status(200).json({blog})

    }catch(err){
        res.status(400).json({
            error: err.message
        })
    }
}