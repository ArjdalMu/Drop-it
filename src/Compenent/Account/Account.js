import React from 'react'
import test_one from '../../images/background.png'
import { render } from 'react-dom'
import { ReactDOM } from 'react'
import { Addproduct } from '../add product/Addproduct';
import { SayWelcome } from './sayWelcome/SayWelcome';
import { BrowserRouter,Route,Routes, } from 'react-router-dom'
import userdata from './EditProfile/EditProfile'
import { socialMediaLink } from './LinkedAccount/LinkedAccount';
import { Products } from './Products/Products';
import './Account.css';



import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import {Modal, Button} from 'antd'
import { Link } from 'react-router-dom'

import {useRef,useState,useEffect,useNavigate} from 'react'
import { pro_items } from '../add product/Addproduct';
export const Account = () => {
  const name = userdata.userName
  
  const [preview,setPreview] = useState('');
  useEffect(()=>{
    if(image){
        
        const reader = new FileReader();
        reader.onloadend = () =>{
          setPreview(reader.result);

        };
        reader.readAsDataURL(image);
      }
    
    else{
      setPreview(null)
  
    }
  },)
  const fileInputRef = useRef();
  const [image,setImage] = useState();
  
  const products = pro_items.map(pro=><Products
    img={pro.img}
    title= {pro.title}
    name = {name}
    />
      
      
      
      
      )
  return(
    
    <div className="start-acount-items">
      <div className="account-items">
      <div className="acount-item">
              <div className="profile-edit-side">
                {
                preview ? (
                <img className='profile-cercle' src={preview} alt="" />
                  ) : (
                  <button onClick={(e)=>{e.preventDefault(); fileInputRef.current.click()}} className='button' >
                    <br/><i class="fa-solid fa-camera"></i>
                  </button>
                  )}
                  <input type='file' style={{display:'none'}} ref={fileInputRef}
                  accept='image/*'
                  onChange={(e)=>{
                    const file = e.target.files[0];
                    if(file && file.type.substr(0,5) ==='image'){
                      setImage(file);
                    }
                    else{
                      setImage(null);
                    }
                  }}
                  />
              </div>
              <div className="name-edit-side">
                    <h4>{name}</h4>
                    <div className="edit-profile">

                      <div className="edit-name-side">
                        <button>
                        <i class="fa-solid fa-user-pen"></i>
                        <Link to='/edit' style={{color : 'black'}}>EDIT PROFILE</Link>
                        </button>
                      </div>
                      <div className="linked-side">
                        <Link to='/linked'><button className='linked'>
                        <i class="fa-solid fa-link"></i>
                          <span className='text-center'>ADD LINKS</span>
                        </button></Link>
                      </div>
                
                    </div>
              <div className="projet-reach">
        <div className="project-views">
          <h3 htmlFor="">Project Views</h3>
          <h3>11</h3>
        </div>
        <div className="project-views">
          <h3 htmlFor="">Appreciations </h3>
          <h3>15</h3>
        </div>
        <div className="project-views">
          <h3 htmlFor="">Followers </h3>
          <h3>01</h3>
        </div>
        <div className="project-views">
          <h3 htmlFor="">Following </h3>
          <h3>09</h3>
        </div>
        <div className={socialMediaLink.facebook === '' ?"social-media" : 'social-media-2'}>
          <a href={socialMediaLink.facebook} target='_blank'><i class="fa-brands fa-facebook"></i></a>
          <a href={socialMediaLink.instagram} target='_blank'><i class="fa-brands fa-instagram"></i></a>
          <a href={socialMediaLink.twitter} target='_blank'><i class="fa-brands fa-twitter"></i></a>
          <a href={socialMediaLink.behance} target='_blank'><i class="fa-solid fa-bell-concierge"></i></a>
        </div>
      </div>
              
              </div>     
        </div>


       
        {
          pro_items.length === 0 ?(
        <SayWelcome />
          )
          :
          (
            <>

        <div className="start-adding">
        
            {products}
        </div>
        </>
        
          )
        }
        
        
        
        
      </div>
      
       
    </div>
  )
}
