import React, { useEffect,useRef } from 'react'
import styles from './home.module.css'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import Footer from '../../Components/Footer/footer'
import corosel from '../../Images/corosel.jpeg'
function Home(props) {
  const [catogories,setCatogories]=useState([])
  const scroller=useRef(null)
  const animator=useRef(null)
  const navigate =useNavigate();
  useEffect(()=>{
    var catogary='';
    const homedata=[];
   props.datalist.forEach((e)=>{if(catogary!==e.category){catogary=e.category;
  homedata.push([e.category,e.image])
  }});
  setCatogories(homedata)
  },
  [props.datalist])
  useEffect(() => {
    const handleScroll = (event) => {
    if(window.scrollY>210)
    {animator.current.style.width="0"}
    else
    {animator.current.style.width="93%"}
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
  <div className={styles.homepage} >
    <img src={corosel} alt="Nan" className={styles.homeImage} />
    <h1>Our categories</h1>
    <div className={styles.animator} ref={animator} ></div>
    <div className={styles.catories_conatiner} >
      <div className={styles.item_mover} onClick={()=>{scroller.current.scrollLeft-=150;}}>&#8810;</div>
    <div className={styles.catogories_box} ref={scroller}>
    {catogories.map((e)=>{ return(
      <div className={styles.catogories_item} onClick={()=>{props.catdisplay(e[0]);navigate("/products");}} 
       style={{backgroundImage:`url("${process.env.PUBLIC_URL +'/'+ e[0]+'.jpeg'}")`}} >{e[0]}</div>)})}
      
    </div>
    <div className={styles.item_mover} onClick={()=>{scroller.current.scrollLeft+=150;}}>&#8811;</div>
    </div>
   <Footer />
  </div>
    
  )
}

export default Home