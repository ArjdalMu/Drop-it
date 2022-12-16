import React from 'react'
import './Card.css'

export const Card = (props) => {
  return (
    <div className="first-cat">
      
          <img src={props.imgSrc}></img>
          <div className="first-cat-content" style={{color:'yellow'}}>
            <h6 className="first-cat-content-title">{props.title}</h6>
            <div className="assesment">
              <li>{props.review}</li>
              <i class="fa-solid fa-star"></i>
            </div>
        </div>
    </div>
  )
}
