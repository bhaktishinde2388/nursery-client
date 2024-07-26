import React from 'react'
import "./PlantCard.css"

function PlantCard({_id,name,category,image,price,description}) {
  return (
    <div className='card-container'>
      <div className='card-top'>
        <h1 className="plant-name">{name}</h1>
        <span className='plant-category'>{category}</span>
       
        <span className='plant-price'>{price}</span>
        <p className='plant-description'>{description}</p>
        </div>
        <div>
        <img className="plant-image" src={image} />
        </div>
    </div>
  )
}

export default PlantCard