import { useParams } from "react-router-dom"

import useSingleBlogFetch from "../../hooks/useSingleBlogFetch"
import useBlogsContext from "../../hooks/useBlogsContext"
import './specific.css'

import Blogs from "../../components/blogs/blogs"

export default function SpecificBlog(){

    const params = useParams()
    const id = params.id

    useSingleBlogFetch(id)
    const {blog} = useBlogsContext()

    return (
        <div className="specific-blog">
            {blog ? <Blogs specific={true} blog={blog}/> : <div>No blog to show</div>}
        </div>
    )
}