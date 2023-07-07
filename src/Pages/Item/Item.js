import React from 'react'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import {db,auth} from "../../config/firebase"
import { collection, addDoc } from "firebase/firestore";
import styles from "./Item.module.css"
const Item = (props) => {
const addtocart=async()=>{
  if(auth.currentUser===null)
  {alert("Please Sign in to add items to card")}
  else{
try{await addDoc(collection(db,"Users",auth.currentUser.uid,"Cart"),props.itemdata)
alert("Item added");

}
catch(error){
    alert(error)
}

}
}

  return (
    <div className={styles.item_box}>
        <img src={props.itemdata.image} className={styles.item_image} alt="Nan"/>
        <div className={styles.describtion_item}>
            <h2 >{props.itemdata.title}</h2>
            <div className={styles.rating}><div><StarHalfIcon/></div><div>{props.itemdata.rating.rate}</div></div>
            <h1 className={styles.price_item}>Rs. {props.itemdata.price}</h1>
            <div className={styles.describtion}>{props.itemdata.description}</div>
            <div className={styles.addtocart_button} onClick={()=>{addtocart()}}>   Add To Cart</div>
        </div>
    
    </div>
  )
}

export default Item