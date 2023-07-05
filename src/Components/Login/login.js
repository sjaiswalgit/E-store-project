import React from 'react'
function Login() {
    return (


        <div className="form-wrapper">

            <span className="title">Login</span>
            <form action="" className='register_form'>
                <input className='text-input' type="email" placeholder='Email' />
                <input className='text-input' type="passsword" placeholder='Password' />
                <button className='button'>Sign In</button>
            </form>
            <span className='switch-text'>Not a member? <span className='login-link'>Click Here to register</span></span>
        </div>


    )
}

export default Login