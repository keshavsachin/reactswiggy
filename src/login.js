import React from 'react';
import './Insta.css';
import './CssFiles/Button.css'
import Button from "./Component/Button"
import Input from './Component/Input';
import './CssFiles/Input.css'
function Login() {
  return (
    <div className='Insta'>
        <h1>Login</h1>
        <Input placeholder="Username" className="Input1"></Input>
        <Input placeholder="Email" className="Input1"></Input>
        <Input placeholder="Password" className="Input1"></Input>
        <Button name='Submit' className="SubmitBTN"/>
        <Button name='Cancel' className="CancelBTN"/>
      
    </div>
  )
}

export default Login