import { createContext,useReducer } from "react";

export const BlogContext = createContext()

function reducer(state,action){
    switch(action.type){
        case 'SET_ALL_BLOGS':
            return {
                blogs: action.payload
            }
        case 'SET_ONE_BLOG':
            return {
                ...state,
                blog: action.payload
            }
        default:
            return state
    }
}

export default function BlogContextProvider({children}){
    
    const [state,dispatch] = useReducer(reducer, {
        blogs: [],
        blog: null,
    })
    
    return (
        <BlogContext.Provider value={{...state, dispatch}}>
            {children}
        </BlogContext.Provider>
    )
}