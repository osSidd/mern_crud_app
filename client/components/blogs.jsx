import { useNavigate } from "react-router-dom"

export default function Blogs({specific, blog}){
    
    const navigate = useNavigate()

    function handleClick(){
        navigate(`/${blog._id}`)
    }
    
    return(
        <div onClick={specific ? () => {} : handleClick}>
            <h2>{blog.title}</h2>
            <p>{blog.snippet}</p>
            <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            {specific && <p>{blog.body}</p>}
        </div>
    )
}