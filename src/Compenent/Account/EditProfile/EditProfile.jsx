import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './EditProfile.css'

const userdata ={userName: 'guest'}
export const EditProfile = () => {
    const [message,setMessage] = useState('')
    const navigate = useNavigate('')
    const [name,setName] = useState('');
    const [lastname,setLastname] = useState('');
    const [occupation,setOccupation] = useState('');
    const [country,setCountry] = useState('');
    const [city,setCity] = useState('');
    const handleChange=(e)=>{
        if(name.length > 0 ){
            userdata.userName = name;
            navigate('/profile');
        }
        else{
            setMessage('please complet all champ')
        }

    }
    

    
  return (
    <div className="start-editing">
        <div className="editing-items">
            <div className="name-editing">
                <div className="first-name-editing">
                    <div className="first-name-title">
                        <label htmlFor="">FIRST NAME</label>
                        <div className="first-name-input" >
                            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                    </div>
                    
                    <div className="last-name-title">
                        <label htmlFor="">LAST NAME</label>
                        <div className="last-name-input">
                            <input type="text" value={lastname} onChange={(e)=>{setLastname(e.target.value)}} />
                        </div>
                    </div>
                    
                </div>
                <div className="occupation-side">
                    <div className="occupation-title">
                        <label htmlFor="">OCCUPATION</label>
                    </div>
                    <div className="occupation-input">
                        <input type="text" value={occupation} onChange={(e)=>{setOccupation(e.target.value)}} />
                    </div>
                </div>
                <div className="location-editing">
                    <div className="location-title">
                        <label htmlFor="">LOCATION</label>
                    </div>
                    <div className="location-item-input">
                    <div className="country-input">
                        <select name="" id="" value={country} onChange={(e)=>{setCountry(e.target.value)}}>
                            <option value="las vegas">las vegas</option>
                            <option value="new york">new york</option>
                            <option value="california<">california</option>
                            <option value="dalas">dalas</option>
                            <option value="nwachintgon">nwachintgon</option>
                        </select>
                    </div>
                    <div className="city-input">
                        <input type="text" placeholder='CITY' />
                    </div>
                    </div>
                </div>
                <button onClick={handleChange}>UPDATE</button>
            </div>
            <p>{message}</p>
        </div>
    </div>
  )
}
export default userdata;
