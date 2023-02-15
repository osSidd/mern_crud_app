import useBlogsFetch from "../../hooks/useBlogsFetch"
import useBlogsContext from "../../hooks/useBlogsContext"
import './home.css'

import Blogs from "../../components/blogs/blogs"

export default function Home(){
   
    useBlogsFetch()
    const {blogs} = useBlogsContext()

    return (
        <div>
            <div className="blogs-section">
                {blogs && blogs.length ? 
                    blogs.map(blog => {
                        return <Blogs blog={blog} key={blog._id}/>
                    })
                : <div style={{textAlign: 'center'}}>No blogs to show</div>}
            </div>
        </div>
    )
}