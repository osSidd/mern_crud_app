import { useEffect } from "react";

import useBlogsContext from "./useBlogsContext";

export default function useBlogsFetch(id){
    const {dispatch} = useBlogsContext()

    useEffect(() => {
        async function fetchOneBlog(){
            const response = await fetch(import.meta.env.VITE_URI+id)
            const json = await response.json()

            if(!response.ok){
                console.log('error')
            }

            if(response.ok){
                dispatch({
                    type: 'SET_ONE_BLOG',
                    payload: json.blog
                })
            }
        }

        try{
            fetchOneBlog()
        }catch(err){
            console.log(err.message)
        }

    }, [])
}