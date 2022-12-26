import React, { useContext } from 'react'
import {GlobalUsers} from '../GlobalContext/GlobalProvider'
import styles from '../Styles/home.module.css'
import Users from './Users'
const Home = () => {
const {posts} = useContext(GlobalUsers);

  return (
    <div className={styles.User_container}>
      <h1>Contact</h1>
        <div className={styles.UserListbox}>
              {posts.map((post) =>{
              return  ( <Users key={post.id} post= {post}/>)
              })}
        </div>
    </div>
  )
}

export default Home