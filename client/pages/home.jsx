import useBlogsFetch from "../hooks/useBlogsFetch"
import useBlogsContext from "../hooks/useBlogsContext"

import Blogs from "../components/blogs"

export default function Home(){
   
    useBlogsFetch()
    const {blogs} = useBlogsContext()

    return (
        <div>
            <h1>Mern-Stack Blogs App</h1>
            {blogs && blogs.length ? 
                blogs.map(blog => {
                    return <Blogs blog={blog} key={blog._id}/>
                })
             : <div>No blogs to show</div>}
        </div>
    )
}