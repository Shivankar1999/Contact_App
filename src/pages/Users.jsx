import React,{useContext} from 'react';
import {GlobalUsers} from '../GlobalContext/GlobalProvider';
import styles from '../Styles/home.module.css'
const Users = ({post}) => {
    // console.log(post);  
    let {posts,setPosts} = useContext(GlobalUsers);
    const handlefilter = (id) =>{
      console.log(id);
      posts = posts.filter((post) => post.id !== id);
      console.log(posts);
      setPosts(posts)
      alert(`User Removed`)

      

      
    }
  return (
    <div className={styles.UserList}>
         <p>User Name :- <strong>{post.name}</strong></p>
         <p>Mail :-<strong>{post.email}</strong></p>
         <p>Contact Number <strong>{post.phone}</strong></p>
         <p>Address:- {post.address.street} &nbsp; <strong>{post.address.city} </strong>{post.address.zipcode}</p>
         <button onClick={(e) => handlefilter(post.id)}>Remove</button>
    </div>
  )
}

export default Users