import React from 'react'
import styles from './card.module.css'
import StarHalfIcon from '@mui/icons-material/StarHalf';
import {useNavigate} from "react-router-dom"
const Card = (props) => {
  const navigate =useNavigate();
  return (
   
      <div className={styles.card_box} onClick={()=>{props.setItem(props.itemdetail); navigate("/products/items")}}>
        <img src={props.itemdetail.image} alt='Nan'/>
        <div className={styles.title}>{props.itemdetail.title}</div>
        <div className={styles.price}>Rs. {props.itemdetail.price}</div>
        <div className={styles.rating_value} >{props.itemdetail.rating.rate} <StarHalfIcon fontSize='small' color="success" /></div>
      </div>
  )
}

export default Card