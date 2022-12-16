import React from 'react'
import './Home.css'
import bg_item from '../../images/background2.png'
import {RiCommunityFill} from 'react-icons/ri'
import {MdHighQuality} from 'react-icons/md'
import {FcAreaChart} from 'react-icons/fc'
import { Link } from 'react-router-dom'
export const Home = () => {
  return (
    <div className="container">
        <div className="title">
            <div className="title-items">
                <h1>HELLO BROTHER <br /><span>FAME</span> IS EASY<br />WITH US</h1>
                <h6>Use our web site to familiarize yourself with your graphic design work and enjoy the best advantages.
                </h6>
                <div className="descreption">
                  <div className="first-desc">
                    <li>COMMUNITY</li>
                    <RiCommunityFill />
                  </div>
                  <div className="first-desc">
                    <li>UPLOAD HD</li>
                    <MdHighQuality />
                  </div>
                  <div className="first-desc">
                    <li>UPLOAD HD</li>
                    <FcAreaChart />
                  </div>
                </div>
            </div>
            
        </div>
        <div className="home-bg">
            <img src={bg_item} alt="" />
        </div>

    </div>
  )
}
