import React from 'react'
import './Login.css'
import { useState } from 'react'
import { Signin } from '../SignIn/Signin'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import {useHistory} from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password ,  setPassword] = useState('');
    const [message,setMessage]= useState('');
    const [auth,setAuth] = useState(false);
    
    const[user, setUser] = useState([]);
    
    const navigate = useNavigate();

    
    const handleSubmit =(e)=>{
        if (email.length > 8 && password.length > 8){
            setAuth(!auth);
            navigate("/profile");
        }
        else{
            setMessage('so small')
        }; 
        e.preventDefault()
    }
    
   
   
  return (
    <section>
    <div className="form-container" >
        <h1>LOGIN</h1>
        <h6>use your account</h6>
        <form action="#" onSubmit={handleSubmit}>
        <div className="control">
            <label htmlFor="email" >EMAIL OR PHONE NUMBER</label>
            <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' id='name'/>
        </div>
        <div className="control">
            <label htmlFor="psw">PASSWORD</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  name='psw' id='name'/>
        </div>
        <div className="check-box">
        <label name='check'><input type="checkbox" htmlFor='check' /> REMEMBER ME</label>
        </div>
        <div className="control">
            <input type="submit"  value="login" />
        </div>
        </form>
        <div className="link">
            <Link to='/signin'>CREATE ACCOUNT</Link><br />
            <a href="#" style={{color:'red'}}>{message}</a>
        </div>
    </div>
    </section>

  )
}
