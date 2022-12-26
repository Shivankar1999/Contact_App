import React from 'react';
import styles from '../Styles/header.module.css'
 import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav className= {styles.header_main}>
        <section className={styles.logo_contact}>
             <img src='https://th.bing.com/th/id/R.348ce70724a6dbad99b6af8166ebd463?rik=Z3fZ6O1508Owag&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f1607%2f4155%2fproducts%2f3D_Logo_Design_S1_blue_WM_1024x1024.png%3fv%3d1516558167&ehk=kdVYY%2fEVEPFz5clEzAMCKNVe2K1fpfEab9%2fsWtrW3Hg%3d&risl=&pid=ImgRaw&r=0' alt='logo' />
             <span>Contact Globe</span>
        </section>
        <section className={styles.nav_items}>
            <ul>
                   <li><Link to= {'/'}>Home</Link></li>
                   <li><Link to={'/addnew'}>Add New</Link></li>
           
            </ul>
        </section>

    </nav>
  )
}

export default Header