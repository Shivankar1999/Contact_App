import React,{useState, useContext} from 'react'
import styles from '../Styles/addnew.module.css';
import {GlobalUsers} from '../GlobalContext/GlobalProvider'
import { useNavigate } from 'react-router-dom';
const AddNew = () => {
  const {posts} = useContext(GlobalUsers);
  const naviagte = useNavigate()
  const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone, setNumber] = useState('')
  const [address, setAddress] = useState('')
  const [isSubnmit,setIssubmit] = useState(false)
 console.log(posts);
  const handleSubmit = (e) =>{

    e.preventDefault()
    let newU = {name,email,phone,address}
     posts.push(newU)
      console.log(posts)
      setIssubmit(true);
      setName('')
      setEmail('')
      setNumber('')
      setAddress('')
      naviagte('/')
      alert('New User is added');
      setIssubmit(false);
  }
  return (
    <div className={styles.newUser_box}>
       <h2>Add New User</h2>
       <form onSubmit={handleSubmit}>
        <div className={styles.fromcontrol}>
          <label>User Name</label>
          <input type='text' value={name} onChange = {(e) => setName(e.target.value)}/>
        </div>
        <div className={styles.fromcontrol}>
          <label>Email</label>
          <input type='email' value={email} onChange = {(e) => setEmail(e.target.value)} required/>
        </div>
        <div className={styles.fromcontrol}>
          <label>Number</label>
          <input type='number' value={phone} onChange = {(e) => setNumber(e.target.value)}/>
        </div>
        <textarea value={address} onChange = {(e) => setAddress(e.target.value)}></textarea>
        <button>{isSubnmit? 'Adding User': 'Add User'}</button>
       </form>
    </div>
  )
}

export default AddNew