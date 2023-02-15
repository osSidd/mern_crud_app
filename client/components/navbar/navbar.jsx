import { Link } from "react-router-dom"
import './navbar.css'

export default function Navbar(){
    return(
        <div className="navbar">
            <div className="heading">
                <Link className="heading-link" to="/">
                    <h1>MERN-Stack Blogs App</h1>
                </Link>
            </div>
            <div>
                <Link className="add-blog" to="/create">Add Blog</Link>
            </div>
        </div>
    )
}