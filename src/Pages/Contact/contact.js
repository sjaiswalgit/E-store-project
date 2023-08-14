import React from 'react'
import styles from './contact.module.css'
import Footer from '../../Components/Footer/footer'
import emailjs from '@emailjs/browser'
function Contact() {
  const [inputs,setInputs]=React.useState({fname:'',email:'',message:''})
    const [success,setSuccess]=React.useState(false);
    const [failure,setFailure]=React.useState(false);
    const form=React.useRef();
    function changeInput(event){
      const {name,value}=event.target;
      setInputs((prevInputs)=>({
          ...prevInputs,
          [name]:value
      }))
  }
  function sendMail(e){
    e.preventDefault();
    emailjs.sendForm('service_twnqysx', 'template_gesy0cx', form.current, '1Fr3TaD3AaKVhJ7ve')
    .then(function(response){setSuccess(true);setFailure(false);},function(error){setFailure(true);})
    
}
function clear(){
    setInputs({fname:'',email:'',message:''});
}

 


  return (
    
    <div className={styles.Contact_body}>
      <h1 >Contact Us</h1>
      {failure && <p className={styles.cantSend}><span style={{color:'red'}}>!</span> Failed to send the form</p>}
      {!success &&<form ref={form}  onSubmit={sendMail} className={styles.Contact_form} >
      <input value={inputs.fname} className={styles.Contact_input1} type="text" onChange={changeInput} placeholder='Enter name' required id="fname" name="fname"/>
      <input value={inputs.email} className={styles.Contact_input1} type="text" onChange={changeInput} placeholder='Enter e-mail'required id="email" name="email"/>
      <textarea value={inputs.message} className={styles.Contact_input2} onChange={changeInput} type="text" placeholder='Enter your query' id="message" name="message"/>
      {!failure && <button className={styles.send} type="submit">Send</button>}
     {failure && <button className={styles.send} onClick={()=>setFailure(false)}>Try Again</button>}
      </form>}
      {success && 
      <div className={styles.submitted}>
       <p className={styles.sent}>SENT!</p>
       <button className={styles.send} onClick={()=>{clear();setSuccess(false)}}>New Form</button>
       </div>}
      <Footer />
    </div> 
  )
}
export default Contact