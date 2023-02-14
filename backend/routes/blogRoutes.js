const express = require('express')
const router = express.Router()
const blogs = require('../controllers/blogController')

//get all blogs
router.get('/', blogs.get_all_blogs);

//post a new blog
router.post('/', blogs.post_a_blog)

//get a single blog
router.get('/:id', blogs.get_a_blog)

//update a single blog
router.patch('/:id', blogs.update_a_blog)

//delete a single blog
router.delete('/:id', blogs.delete_a_blog)

module.exports = router;