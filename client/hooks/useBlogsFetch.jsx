import { useEffect } from "react";

import useBlogsContext from "./useBlogsContext";

export default function useBlogsFetch(){
    const {dispatch} = useBlogsContext()

    useEffect(() => {
        async function fetchAllBlogs(){
            const response = await fetch(import.meta.env.VITE_URI)
            const json = await response.json()

            if(!response.ok){
                console.log('error')
            }

            if(response.ok){
                dispatch({
                    type: 'SET_ALL_BLOGS',
                    payload: json.blogs
                })
                console.log(json.blogs)
            }
        }

        try{
            fetchAllBlogs()
        }catch(err){
            console.log(err.message)
        }

    }, [])
}