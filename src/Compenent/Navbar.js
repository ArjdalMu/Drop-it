import {React, useContext, useState} from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    BrowserRouter,
    useNavigate
  } from "react-router-dom";
  
import './Navbar.css'
import { Home } from './Home/Home'
import { Categorie } from '../Compenent/Categories/Categorie'
import { Explore } from './ExploreCard'
import { Login } from './Login/Login';
import { Signin  } from './SignIn/Signin'
import { Account } from './Account/Account';
import logo from '../images/white.png'
import {FaBars} from 'react-icons/fa'
import {ImCross} from 'react-icons/im'
import { useLocation } from 'react-router-dom';



export const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    const navigate = useNavigate('');
    const location = useLocation('');
    

  return (
    
    <nav className="nav-bar">
        
        <img src={logo} alt="" className="logo" />
        <ul  className={Mobile ? 'nav-links-mobile' : 'nav-links'} onClick={()=>{setMobile(false)}}>
            

            {
                location.pathname === '/profile' || location.pathname ==='/Addproduct' || location.pathname ==='/edit' || location.pathname==='/linked'  ? (
                
                
            <>
            
            
            
            <li className='user-item-logo'>
                <a><Link to='profile'>A</Link></a>
            </li>
            
            <li>
                <Link to='Addproduct'>ADD PRODUCT</Link>
            </li>
            <li>
                <Link to='' className='btn first' >
                <i class="fa-solid fa-right-from-bracket"></i>
                </Link>
            </li>
            
            </>
                )
            :

            (

             <>
             <li>
                <Link to ='' >home</Link>
            </li>
            <li>
                <Link to='/categorie'>categorie</Link>
            </li>
            <li>
                <Link to='/explore'>explore</Link>
            </li>
            <li>
                <Link className='btn first' to='/login'>login</Link>
            </li>
            <li>
                <Link className='btn second' to='/signin'>sign in</Link>
            </li>
            
            </>
            )
            }
           
            
            
            
            
            
            
            
            

            
            
        </ul>
        <button className='mobile-menu-icon' onClick={()=>{setMobile(!Mobile)}}>
                {Mobile ? <ImCross/> : <FaBars/>}
                
        </button>
    </nav>






    
    
  )
}
