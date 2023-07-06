import React from 'react'
import { createContext,useState,useEffect,useContext } from 'react'
const Usercontext=createContext();
const Api = ({children}) => {
    const[data,setData]=useState([])
  
    async function fetching ()
    {try {const apidata= await fetch('https://fakestoreapi.com/products');
          setData( await apidata.json());
        
    }
    catch(error)
    {console.log(error)}}
  useEffect(()=>{fetching()},[]);
  

  return (<Usercontext.Provider value={data}>
    {children}
  </Usercontext.Provider>)
}

const Getdata=()=>
{return useContext(Usercontext);}

export {Api,Getdata}