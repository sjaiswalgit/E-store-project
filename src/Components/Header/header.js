import React from 'react'
import styles from './header.module.css'
function Header() {
  return (
    <div className={styles.header}>
        <h1 className={styles.site_name}>E-store</h1>
        <div className={styles.navbar}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Products</li>
            <li>SignUp/SignIn</li>
        </div>
    </div>
  )
}

export default Header