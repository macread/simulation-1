import React from 'react';

export default function Product(props) {
  return (
    <div key={props.key}>
        <img src={ props.imageURL } alt="product" className=""/>
        <span className="">Name: {props.name}</span>
        <span className="">Price: {props.price}</span>
    </div> 
  )
}