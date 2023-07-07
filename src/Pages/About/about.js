import React from "react";
import styles from "./about.module.css"
import Footer from "../../Components/Footer/footer";
import aboutImage from '../../Images/about_image.jpeg'
function About() {
  

  return (
    <div className={styles.about_body}>
      <h1>About us</h1>
      <div className={styles.about_container}>
      <img src={aboutImage} alt="Nan"/>
      <p> This website is not real company ruther it was created for personal project.
         I, Subhash Kumar Jaiswal, developed it using Reactjs to showcase skills.
         This project deals with functionlity of E-commerece website from login to adding items to Cart.
         For backend its uses Firebase and for product list an open API from fakestare.com.
         </p>
      </div>
      <Footer />
    </div>
    
  )
}

export default About;