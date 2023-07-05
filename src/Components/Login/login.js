import React from "react";
import styles from "./login.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase"

function Login(props) {
  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(
        auth,
        e.target[0].value,
        e.target[1].value
      );
      // alert("sign in successful")
    } catch (err) {
      alert(err);
    }
  };

    return (   
        <div className={styles.form_box}>  
        <div className={styles.form_wrapper}>           
            <span className={styles.title}>Login</span>
            <form onSubmit={signIn} className={styles.register_form}>
                <input className={styles.text_input} type="email" placeholder='Email' required/>
                <input className={styles.text_input} type="password" placeholder='Password' required />
                <button className={styles.button}>Sign In</button>
            </form>
            <span className={styles.switch_text}>Not a member? <span className='login-link' style={{cursor:"pointer",fontWeight:"bold"}} onClick={()=>props.setIsMember(false)}>Click Here to register</span></span>
        </div>
        </div>         
    )
}

export default Login;