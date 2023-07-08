import React, { useEffect ,useState} from 'react'
import styles from './FilterSorting.module.css'
const FilternSorting = (props) => {
const [categories,setCatogories]=useState([]);
useEffect(()=>
{const arr=[...new Set(props.displayData.map((e)=>{return(e.category)}))]
        setCatogories(arr);},[props.displayData]
)


  return (
    <div className={styles.filter_box}> 
    <h3>Filter and Sorting</h3>
    <div className={styles.filter_display}> 
    <div className={styles.fliter_point}>Filter &#8897;</div>
    <div className={styles.filter}>
    Filter By:
    
   <div className={styles.price_filter}>Price:
    <br/>
    <input className={styles.range} type='range' name="range" min='0' max ={props.maxData}  onChange={(e)=>{props.filterRange(e)}}/>
    <label for="range" style={{float:"right",fontSize:"small"}}>Max Rs.{props.maxData}</label>
    </div>
    <div className={styles.category_filter}>
      <h4>Categories &#8744;</h4>
      <div className={styles.category_list}>
      {categories.map((e)=>{return(<div className={styles.category_name} onClick={()=>{props.catFilter(e)}}>{e}</div>)})}</div>
    </div></div>
    </div><div className={styles.sorting_display}>

        <div className={styles.sorting_point}>Sort By &#8897;</div>
        <form style={{textAlign:'left'}} onChange={(e)=>{props.sorting(e)} }>
        <input type='radio' className={styles.price_tag} name='sort' id="price-tag"/>
        <label for='price-tag'>Sort By Price</label><br/>
        <input type='radio' className={styles.rating_tag} name='sort' id="rating-tag"/>
        <label for='rating-tag'>Sort By Rating</label>
        </form>
    </div>
    
    </div>
  )
}

export default FilternSorting