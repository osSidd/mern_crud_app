import { useContext } from "react";

import { BlogContext } from "../context/blogContext";

export default function useBlogsContext(){
    const context = useContext(BlogContext);
    if(!context){
        throw new Error('cannot use blog context outside provider')
    }
    return context
}