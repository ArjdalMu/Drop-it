import React from 'react'
import './Addproduct.css'

import test_one from '../../images/background.png'

import { ReactDOM } from 'react'


import {useRef,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'




import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import {Modal, Button} from 'antd'
import { Link } from 'react-router-dom'
const pro_items = []
export const Addproduct = () => {
 
  const [img,setImg] =useState('');
  const [title,setTitle] = useState('');
  const [description,setDescription] = useState('');
  const [category,setCategory] = useState('');
  const [keys,setKeys] = useState('');
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
  const [msg,setMsg] = useState('');
  const navigate = useNavigate();
  const handleClick = ()=> {
    if(preview === null || title.length < 5 || description < 5){
      setMsg('please complete all champs')
    }
    else{
        pro_items.push({img : preview ,description: description , title: title})
        
        navigate('/profile')
    }
  }
  return (
    <div>
      <div className="start-adding-product">
        <div className="adding-product-items">
          <div className="product-img">
          {
                preview ? (
                <img className='add-img-rec' src={preview} alt="" />
                  ) : (
                  <button onClick={(e)=>{e.preventDefault(); fileInputRef.current.click();setImage(preview)}} className='add-img-btn' >
                    <br/><i class="fa-solid fa-circle-plus"></i><br/><h4>ADD IMAGES FROM UR COMPUTER</h4>
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
          <div className="inputes-side">
            <input type="text"  placeholder='GIVE YOUR PROJECT A TITLE' value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br/>
            <input type="text" placeholder='GIVE YOUR PROJECT A DESCRIPTION' className='pro-descripton' value={description} onChange={(e)=>{setDescription(e.target.value)}} /><br/>
            <input type="text" placeholder='CATEGORY' value={category} onChange={(e)=>{setCategory(e.target.value)}} /><br/>
            <input type="text" placeholder='ADD A KEYWORDS TO HELP POEPLE DISCOVRER YOUR PROJECT' value={keys} onChange={(e)=>{setKeys(e.target.value)}}/><br/>
            <div className="publish-btn">
              <button onClick = {handleClick}>PUBLISH</button>
            </div>
            <p>{msg}</p>
          </div>
          
        </div>

        
      </div>
    </div>
  )
  
}
export  {pro_items}

