import { Link, useNavigate } from "react-router-dom"
import './blogs.css'
import useDeleteBlog from "../../hooks/useDeleteBlog"

export default function Blogs({specific, blog}){

    const navigate = useNavigate()
    const {deleteBlog} = useDeleteBlog(blog._id)

    function handleClick(){
        navigate(`/edit/${blog._id}`)
    }
        
    return(
        <div className="blog-component">
            <h2 className="title">{blog.title}</h2>
            
            <div className="date-container">
                <span className="date">created at: {new Date(blog.createdAt).toLocaleDateString()}</span>
            
                {specific && <span className="date">updated at: {new Date(blog.updatedAt).toLocaleDateString()}</span>}
            </div>
           
            <p>{blog.snippet}</p>
           
            {specific ? <p className="body">{blog.body}</p> : <div><Link className="link" to={blog._id}>Read More</Link></div>}
           
            {!specific && <div className="btn-container">
                <button className="btn delete" onClick={deleteBlog}>Delete</button>
            </div>}
           
            { specific && <div className="btn-container">
                <button className="btn edit" onClick={handleClick}>Edit</button>
            </div>}
        </div>
    )
}