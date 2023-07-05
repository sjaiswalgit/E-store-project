import React from 'react'
import styles from"./register.module.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {auth} from '../../config/firebase'; 
import {createUserWithEmailAndPassword,updateProfile} from "firebase/auth"
function Register(props) {

    const register = async(e)=>{
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(auth,e.target[1].value,e.target[2].value)
            await updateProfile(auth.currentUser,{displayName:`${e.target[0].value}`})
            
            alert("registration successful")
            // alert((e.target[1].value)+(e.target[2].value))
        }
        catch(err){
            alert(err)
        }
    }
    



    return (

        <div className={styles.form_box}>
            <div className={styles.form_wrapper}>                
                <span className={styles.title}>Register</span>
                <form onSubmit={register} className={styles.register_form}>
                    <input className={styles.text_input} type="text" placeholder='Enter your name' required/>
                    <input className={styles.text_input} type="email" placeholder='Email' required />
                    <input className={styles.text_input} type="password" placeholder='Password' required/>
                    <input className={styles.file_input} type="file" id="avatar"/>
                    <label htmlFor="avatar" className={styles.avatar_box}>
                        <AccountBoxIcon/><span>Add an avatar</span>
                    </label>
                    <button className={styles.button}>Sign Up</button>
                </form>
                <span className={styles.switch_text}>Already a member? <span className={styles.login_link} style={{cursor:"pointer",fontWeight:"bold"}} onClick={()=>props.setIsMember(true)}>Click Here to login</span></span>
            </div>
        </div>

    )
}

export default Register