import React from 'react'
import './LinkedAccount.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const socialMediaLink = {facebook: ''  , instagram: '' , twitter : '' , behance : '' }
export const LinkedAccount = () => {
    const [faceLink,setFacelink] = useState('');
    const [instaLink,setInstalink] = useState('');
    const [twitLink,setTwitlink] = useState('');
    const [beLink,setBelink] = useState('');
    const [message,setMessage] = useState('');
    const navigate = useNavigate('');
    const urlPattern = new RegExp('(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?');
    const isValidUrl = urlString=> {
	  	var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
	  return !!urlPattern.test(urlString);
	}
    const handleClick =()=>{
        if(isValidUrl(faceLink) && isValidUrl(instaLink) && isValidUrl(twitLink) && isValidUrl(beLink)){
            socialMediaLink.facebook = faceLink;
            socialMediaLink.instagram  = instaLink;
            socialMediaLink.twitter = twitLink;
            socialMediaLink.behance = beLink;
            navigate('/profile')
        }
        else{
            setMessage('please write a valid url')
        }
    }
    
  return (
    


   <div className="start-linking-account">
    <div className="linking-items">
        <div className="linking-title">
            <h2>LINKED YOUR ACCOUNT</h2>
            
            
        </div>
        <div className="facebook-link-area">
            <div className="facebook-add-icon">
                <button><i class="fa-solid fa-plus"></i></button>
            </div>
            <div className="link-head">
                <h2>FACEBOOK</h2>
                <h1><i class="fa-brands fa-facebook"></i></h1>
            </div>
            <div className="link-input">
                    <input type="text" value={faceLink} onChange={(e)=>{setFacelink(e.target.value)}} placeholder='URL : http ://example.com' />
            </div>
        </div>
        <div className="facebook-link-area">
            <div className="facebook-add-icon">
                <button><i class="fa-solid fa-plus"></i></button>
            </div>
            <div className="link-head">
                <h2>Instgram</h2>
                <h1><i class="fa-brands fa-instagram"></i></h1>
            </div>
            <div className="link-input">
                    <input type="text" value={instaLink} onChange={(e)=>{setInstalink(e.target.value)}} placeholder='URL : http ://example.com' />
            </div>
        </div>
        <div className="facebook-link-area">
            <div className="facebook-add-icon">
                <button><i class="fa-solid fa-plus"></i></button>
            </div>
            <div className="link-head">
                <h2>Twiter</h2>
                <h1><i class="fa-brands fa-twitter"></i></h1>
            </div>
            <div className="link-input">
                    <input type="text" value={twitLink} onChange={(e)=>{setTwitlink(e.target.value)}} placeholder='URL : http ://example.com' />
            </div>
        </div>
        <div className="facebook-link-area">
            <div className="facebook-add-icon">
                <button><i class="fa-solid fa-plus"></i></button>
            </div>
            <div className="link-head">
                <h2>Behance</h2>
                <h1><i class="fa-brands fa-square-behance"></i></h1>
            </div>
            <div className="link-input">
                    <input type="text" value={beLink}  onChange={(e)=>{setBelink(e.target.value)}} placeholder='URL : http ://example.com' />
            </div>
        </div>
        <p style={{color: 'red'}}>{message}</p>
        <div className="save-btn">
            <button onClick={handleClick}>SAVE</button>
        </div>
    </div>
    
   </div>
  )
}
export {socialMediaLink}

