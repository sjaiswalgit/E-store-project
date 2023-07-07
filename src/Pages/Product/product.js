import styles from './product.module.css'
import { useEffect, useState } from 'react'
import FilternSorting from '../../Components/FilterSorting/FilterSorting'
import Card from '../../Components/Card/card'

const Products = (props) => {
    const[filterData,setFilterData]=useState([])
    const[maxData,setmaxData]=useState();
    const [catProduct,setCatproduct]=useState([]);

   useEffect(()=>{console.log("mounting");
  return ()=>{console.log("unmounting")}
  },[])

    var data=props.displayData;
useEffect(()=>{console.log("in useEffect")
  setCatproduct(data)
setFilterData(data);
return()=>{console.log("out useEffect")}
},[data])

useEffect(()=>{
  setmaxData(Math.ceil(Math.max(...catProduct.map((e)=>{return(e.price)}))))
},[catProduct])


    function filterRange(range){
const filteredList=catProduct.filter((e)=>{return(e.price<=range.target.value)})
setFilterData(filteredList)
    }
function catFilter(e){
 const t= data.filter((a)=>{return(a.category===e)});
 setCatproduct(t);
 setFilterData(t);
 console.log("localfun")
}
console.log("mainfun")
function  sorting(e){
  var unsort=[...filterData]
  if(e.target.id==="price-tag")
 { unsort.sort((a,b)=>{return(a.price-b.price)});
 setFilterData(unsort)}
  if(e.target.id==="rating-tag")
  {unsort.sort((a,b)=>{return(b.rating.rate-a.rating.rate)});
  setFilterData(unsort)}

}


  return ( <>
  
  <FilternSorting filterRange={filterRange} maxData={maxData} sorting={sorting} displayData={props.displayData} catFilter={catFilter}/>
    <div className={styles.card_container}>
      {filterData.map((itemdetail)=>{return (
      <Card itemdetail={itemdetail} setItem={props.setItem}/>)})}
</div>
</>
  )
}

export default Products