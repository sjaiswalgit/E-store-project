import { useState,useEffect } from 'react';
import './App.css';
import Header from './Components/Header/header';
import Auth from './Pages/Auth/auth';
import Home from './Pages/Home/home';
import About from "./Pages/About/about";
import Contact from "./Pages/Contact/contact";
import Products from "./Pages/Product/product";
import { Getdata } from './config/Api'
import {auth} from "./config/firebase"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from  './Pages/Item/Item';
function App() {
const[itemdata,setItem]=useState(null)
const[displayData,setDisplaydata]=useState([]);
const [loginState,setLoginState]=useState(false)
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  });

  // Cleanup the listener when the component unmounts
  return () => {
    unsubscribe();
  };
}, []);


console.log(auth)

const datalist=Getdata();
useEffect(()=>setDisplaydata(datalist),[datalist])
 function searchProduct(productname)
{if(productname.key==="Enter")
{const exp=new RegExp(productname.target.value,"i")
  const result=datalist.filter((e)=>{return( e.title.search(exp)!==-1 )});
  setDisplaydata(result);}
  else
  {setDisplaydata(datalist)}
}
const catdisplay=(cat)=>
{const mydisplay= datalist.filter((e)=>{return(e.category===cat)})
setDisplaydata(mydisplay);
}
const reset=()=>{setDisplaydata(datalist);}

return (
    <div className="App">  
    <BrowserRouter>
      <Routes>   
      <Route path="/" element={<Header searchProduct={searchProduct} loginState={loginState} reset={reset}/>}>
      <Route index element={<Home datalist={datalist} catdisplay={catdisplay} />}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="products" element={<Products displayData={displayData} setItem={setItem}/>}/>
      <Route path="products/items" element={<Item itemdata={itemdata} />}/>
      <Route path="auth" element={<Auth loginState={loginState}/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
        );
}

export default App;