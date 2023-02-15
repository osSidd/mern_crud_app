import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import useBlogsContext from "./useBlogsContext";

export default function useEditBlog(){

    const navigate = useNavigate()

    const {dispatch, blog} = useBlogsContext()

    const [formData,setFormData] = useState({
        title: blog.title,
        snippet: blog.snippet,
        body: blog.body
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    async function submitBlog(e){
        e.preventDefault()

        const response = await fetch(import.meta.env.VITE_URI+blog._id, {
            method: "PATCH",
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if(!response.ok){
            console.log('error')
        }

        if(response.ok){
            dispatch({
                type: 'SET_ONE_BLOG',
                payload: json.blog
            })
            navigate(`/${blog._id}`)
            console.log(json)
        }
    }

    return {
        formData,
        handleChange,
        submitBlog
    }
}