import React from 'react'

function PlantCard({_id,name,category,image,price,description}) {
  return (
    <div>
        <h1 className="plant-name">{name}</h1>
        <span className='plant-category'>{category}</span>
        <img className='plant-img' src={image}/>
        <span className='plant-price'>{price}</span>
        <p className='plant-description'>{description}</p>
    </div>
  )
}

export default PlantCard