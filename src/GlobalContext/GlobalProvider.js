import  { createContext,useEffect ,useState} from "react"


export const  GlobalUsers = createContext(null);

export const GlobalProviders = ({children}) =>{
    const [posts, setPosts] = useState([])
 
      useEffect(() => {
        const getPosts = async () =>{
            const response =  await fetch('https://jsonplaceholder.typicode.com/users');
            const data =  await response.json();
            setPosts(data);
            // console.log(data);
        }
        getPosts()
      }, [])
      
    return (
        <GlobalUsers.Provider value={{
            posts: posts,
            setPosts:setPosts,
        }} >{children}</GlobalUsers.Provider>
    )
}

