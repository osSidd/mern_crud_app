import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import useBlogsContext from "./useBlogsContext";

export default function useBlogsPost(){
    const navigate = useNavigate()

    const {dispatch} = useBlogsContext()

    const [formData,setFormData] = useState({
        title: '',
        snippet: '',
        body: ''
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

        const response = await fetch(import.meta.env.VITE_URI, {
            method: "POST",
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
                type: 'CREATE_BLOG',
                payload: json.blog
            })
            setFormData({
                title: '',
                snippet: '',
                body: ''
            })
            navigate('/')
            console.log(json)
        }
    }

    return {
        formData,
        handleChange,
        submitBlog
    }
}