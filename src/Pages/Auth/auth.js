import React, { useState } from 'react'
import Register from '../../Components/Register/register'
import Login from '../../Components/Login/login'
function Auth() {
  const [isMember,setIsMember]=useState(true)
 

  return (
    <div>{
        (isMember)?
        <Login setIsMember={setIsMember} />:
        <Register setIsMember={setIsMember} />}
    </div>
  )
}

export default Auth