import React from 'react'
import Card from '../../Components/Card/card'
import { useState,useEffect } from 'react';
import { Getdata } from '../../config/Api';
import styles from './product.module.css'
const Product = () => {
    const[displayData,setDisplaydata]=useState([]);
    const datalist=Getdata();
useEffect(()=>{setDisplaydata(datalist)
console.log(datalist)},[datalist])
  return (
    <div className={styles.card_container}>
     {displayData.map((itemdetail)=>{return (
    <Card  itemdetail={itemdetail} />)})}
    </div>
  )
}

export default Product