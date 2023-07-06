import React from 'react'
import './card.css'
import StarHalfIcon from '@mui/icons-material/StarHalf';
const Card = (props) => {
  return (
   
      <div className='card-box' >
        <img src={props.itemdetail.image} alt='Nan'/>
        <div className='title'>{props.itemdetail.title}</div>
        <div className='price'>Rs. {props.itemdetail.price}</div>
        <div className='rating_value' >{props.itemdetail.rating.rate} <StarHalfIcon fontSize='small' color="success" /></div>
      </div>
  )
}

export default Card