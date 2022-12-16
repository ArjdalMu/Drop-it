import React from 'react'
import explore_item from '../images/card img.png'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



export const ExploreCard = (props) => {
    const counter = useSelector((state)=>state.counter)
    const [Liked, setLiked] = useState(false);
    const dispatch = useDispatch()
    


  return (
    <div className="explore-main-items">
                    <img src={props.img} alt="" />
                    <div className="explore-main-items-subtitle">
                        <div className="explore-main-items-user">
                            <div className="user-profile">
                                <a>{props.logo}</a>
                            </div>
                            <li>{props.name}</li>
                        </div>
                        <div className="liked-side">
                            <li>{Liked ? counter +1 : counter}</li> {/*//Liked ? nbLiked +1 : nbLiked*/}
                            <button onClick={()=>{setLiked(!Liked)}}>{Liked ?  (<i class="fa-solid fa-heart"></i>)  : (<i class="fa-regular fa-heart"></i>)}</button>
                        </div>
                        <div className="views-side">
                            <li>12000</li>
                            <i class="fa-solid fa-eye"></i>
                        </div>
                    </div>
    </div>
  )
}

  


