import React, { useState } from 'react'
import { Navbar } from './Compenent/Navbar'
import { LinkedAccount } from './Compenent/Account/LinkedAccount/LinkedAccount'

import { Home } from './Compenent/Home/Home'
import { Categories } from './Compenent/Categories/Categorie'
import { Explore } from './Compenent/Explorer/Explore'
import { Login } from './Compenent/Login/Login'
import { Signin  } from './Compenent/SignIn/Signin'


import { BrowserRouter,Route,
  Link,
  Routes, } from 'react-router-dom'

import { Account } from './Compenent/Account/Account'
import { Addproduct } from './Compenent/add product/Addproduct'
import { EditProfile } from './Compenent/Account/EditProfile/EditProfile'
export const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar />
      <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/categorie' element={<Categories />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/profile' element={<Account />} />
            <Route path='/Addproduct' element={<Addproduct/>} />
            <Route path='/edit' element={<EditProfile/>} />
            <Route path='/linked' element={<LinkedAccount />} />

      </Routes>

    </BrowserRouter>

)
}

     