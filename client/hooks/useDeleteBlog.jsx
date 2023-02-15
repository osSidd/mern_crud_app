import useBlogsContext from "./useBlogsContext";

export default function useDeleteBlog(id){
    const {dispatch} = useBlogsContext()

    async function deleteBlog(){
        const response = await fetch(import.meta.env.VITE_URI+id,{
            method: 'DELETE'
        })
        const json = await response.json()

        if(!response.ok){
            console.log('error')
        }

        if(response.ok){
            dispatch({
                type: 'DELETE_BLOG',
                payload: json.blog
            })
            console.log(json.blog)
        }
    }

    return {
        deleteBlog
    }
}