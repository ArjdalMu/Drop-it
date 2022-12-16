import React from 'react';
import './Products.css';

export const Products = (props) => {
  return (
    <div className="products-items">
        <div className="products-item-img">
            <img src={props.img} alt="" />
        </div>
        <div className="products-items-title">
            <h4>{props.title}</h4>
        </div>
        <div className="products-items-name">
            <h6>{props.name}</h6>
        </div>
    </div>
  )
}
