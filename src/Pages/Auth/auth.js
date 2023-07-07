import React, { useState } from 'react'
import Register from '../../Components/Register/register'
import Login from '../../Components/Login/login'
import Cart from '../../Components/Cart/Cart'
function Auth(props) {
  const [isMember,setIsMember]=useState(true)
 

  return (
    <div>{(props.loginState)?
        <Cart />:
        <>{(isMember)?
        <Login setIsMember={setIsMember} /> :
        <Register setIsMember={setIsMember} />}</>}
   
   </div>
  )
}

export default Auth