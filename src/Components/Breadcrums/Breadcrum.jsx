import React from 'react'
import './Breadcrum.css';
import arrow_icon from "../Assets/arrow.png"

const Breadcrum = (props) => {
  const {product}=props;

  const {category,name}=product;
  
  
  return (  
    
     <div className='breadcrum'>


       
      HOME <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {category} <img src={arrow_icon} alt="" /> {name}
    </div>
)
  
}

export default Breadcrum
