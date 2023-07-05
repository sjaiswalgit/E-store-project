import './App.css';
import Header from './Components/Header/header';
import Auth from './Pages/Auth/auth';
import Home from './Pages/Home/home';
import About from './Pages/About/about';
import Contact from './Pages/Contact/contact';
import Products from './Pages/Product/product';
import {auth} from "./config/firebase"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState,useEffect} from 'react'

function App() {
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
  return (
    <div className="App">  
    <BrowserRouter>
      <Routes>   
      <Route path="/" element={<Header />}>
      <Route index element={<Home  />}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact />}/>
      <Route path="products" element={<Products />}/>
      <Route path="auth" element={<Auth loginState={loginState}/>}/>
      </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );}
export default App