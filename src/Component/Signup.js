import React from 'react'
import Input from './Input'
function Signup() {
  return (
    <div className='Maincontainer'>
        <div className='Left'>
            <h1>Sign In</h1>  
         
            <h3>or use your account</h3>
            <Input placeholder='Email' className='Input1'></Input>
            <Input placeholder='Password' className='Input1'></Input>
            <h2>Forgot Your Password</h2>
            <button className='Signin'>SIGN IN</button>
        </div>
        <div className='Right'>
            <h1>Hello,Friend!</h1>
            <h3>Enter your details and start journey with us</h3>
            <button className='Signup'>SIGN UP</button>
        </div>
    </div>
  )
}

export default Signup