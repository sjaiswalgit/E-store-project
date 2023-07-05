import React, { useState } from 'react'
import Register from '../../Components/Register/register'
import Login from '../../Components/Login/login'
function Auth(props) {
  const [isMember,setIsMember]=useState(true)
 

  return (
    <div>{(!props.loginState)?
        <div>heloo</div>:
        <>{(isMember)?
        <Login setIsMember={setIsMember} /> :
        <Register setIsMember={setIsMember} />}</>}
   
   </div>
  )
}

export default Auth