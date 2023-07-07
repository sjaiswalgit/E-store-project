import React,{useEffect, useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./Cart.module.css";
import {db,auth} from "../../config/firebase";
import {collection,deleteDoc,doc,onSnapshot} from "firebase/firestore"

const Cart = () => {
const [cartItem,setCartitem]=useState([]);
const [totalCost,setTotalcost]=useState(0)
const [adress,setadress]=useState("Set your Address")
useEffect(()=>{
const getingCartData=onSnapshot(collection(db,"Users",auth.currentUser.uid,"Cart"),(doc)=>
{setCartitem(doc.docs); })

},[])

useEffect(()=>{
  if(cartItem.length!==0) 
{let tcost=cartItem.reduce((a,b)=>{return (a+b.data().price)},0);
tcost=Math.ceil(tcost);
  setTotalcost(tcost);}
},[cartItem])

const deleteitem=(itemid)=>{
try{deleteDoc(doc(db,"Users",auth.currentUser.uid,"Cart",itemid)) 
console.log("item-deleted")}
catch(e){console.log(e)
}}


  return (
    <div className={styles.Cart_container}>
        <div className={styles.details_box}>
            <h1>Welcome {auth.currentUser.displayName}</h1>
            <p>Delivery Address: {adress} </p>
            <form className={styles.cart_form} onSubmit={(e)=>{e.preventDefault(); setadress(e.target[0].value);}}>
            <input placeholder='Put your address' type="text"/>
            <button type="submit" class={styles.Set_adress_bttn}>Set Address</button>
            </form>
            <div>Total Amount <span style={{fontWeight:"bold",color:"wheat"}}>Rs. {totalCost}</span> </div>
            <button onClick={()=>{alert("This is just a project and not a real company website")}} className={styles.Buy_bttn}>Buy</button>
        </div>
        <div className={styles.Cart_box}>
          <h1 style={{marginBottom:"10px"}}>On Your Cart</h1>
            {cartItem.map((e)=>{return(
            <div className={styles.cart_item}>
            <img src={e.data().image} alt="nan"  />
            <DeleteIcon className={styles.delete_item} onClick={()=>{deleteitem(e.id)}}/>
            <div className={styles.product_details}>
            <h3>{e.data().title}</h3>
            <p>Details: {e.data().description}</p>
            </div>
            <div className={styles.price_tag}>Rs. {e.data().price}</div>
            
            </div>)})}
        </div>
    </div>
  )
}

export default Cart