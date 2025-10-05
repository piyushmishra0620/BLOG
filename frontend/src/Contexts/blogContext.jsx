import {createContext,useState} from 'react';

const blogContext = createContext();

export const BlogProvider = (props)=>{
    const [posts,setPosts] = useState(); 
    return(
        <blogContext.Provider value={{posts}}>
            {props.children}
        </blogContext.Provider>
    )
}

export default blogContext;