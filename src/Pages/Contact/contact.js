import React from 'react'
import styles from './contact.module.css'
import Footer from '../../Components/Footer/footer'
function Contact() {
const mail=(e)=>{
  e.preventDefault()
  console.log(e.target[0].value)
}



  return (
    
    <div className={styles.Contact_body}>
      <h1 >Contact Us</h1>
      <form method="POST" onSubmit={(e)=>mail(e)} className={styles.Contact_form} action="mailto:bountyBcs@gmail.com">
      <input className={styles.Contact_input1} type="text" placeholder='Enter name' required/>
      <input className={styles.Contact_input1} type="text" placeholder='Enter e-mail'required/>
      <textarea className={styles.Contact_input2}  type="text" placeholder='Enter your query'/>
      <button type="submit">Submit</button>
      </form>
      <Footer />
    </div> 
  )
}
export default Contact