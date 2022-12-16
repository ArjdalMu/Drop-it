import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '../Login/Login'
import './SignIn.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const users = [];




export const Signin = () => {
  const navigate = useNavigate('')
  const [name,setName] = useState('');
  const [mail,setMail] = useState('');
  const [password,setPassword] = useState('');
  const[msg,setMsg] = useState('');
  const handleSubmit = (e)=>{
    if(name.length > 4 && password.length > 8){
      users.push({username: name , usermail:mail , userpassword: password});
      navigate('/profile')
        
    }
    else{
        setMsg('Email or password are incorrect');
    }
    e.preventDefault()
    
  }
  return (
    <section>
    <div className="form-container">
        <h1>SIGNUP</h1>
        <h6>create your account</h6>
        <form action="#" onSubmit={handleSubmit}>
        <div className="control flex-one">
          <div className="f-name">
            <label htmlFor="email">FIRST NAME</label><br/>
            <input type="text" onChange={(e)=>{setName(e.target.value)}} value={name}  name='email' id='name'/>
          </div>
          <div className="fm-name">
            <label htmlFor="email">FAMILY NAME</label><br/>
            <input type="text"  name='email' id='name'/>
          </div>
        </div>
        <div className="control">
            <label htmlFor="eml">EMAIL OR PHONE NUMBER</label>
            <input type="email"  name='psw' id='name' />
        </div>
        <div className="control">
            <label htmlFor="psw">PASSWORD</label>
            <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  name='psw' id='name'/>
        </div>
        <div className="check-box">
        <label name='check'><input type="checkbox" htmlFor='check' />I HAVE READY AND I AGREE TO THE TERMS</label>
        </div>
        <div className="control">
            <input type="submit" value="sign up"  />
        </div>
        </form>
        <div className="link">
            <Link to='/login'>I ALREADY HAVE AN ACCOUNT</Link><br />
            <a href="#" style={{color:'red'}}>{msg}</a>
        </div>
    </div>
    </section>
  )
}
