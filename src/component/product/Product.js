import React from 'react';
import {Link} from 'react-router-dom';

export default function Product(props) {
  return (
    <div>
        <img src={ props.imageURL } alt="product" className=""/>
        <span className="">Name: {props.name} </span>
        <span className="">Price: {props.price} </span>
        <button type='' className='' onClick={()=> props.deleteProduct(props.id)}>Delete</button>
        <Link to='add/'>
          <button type='' className='' onClick={()=> props.setSelectedProductID(props.id)}>Edit</button>
        </Link>
    </div> 
  )
}