import React from 'react'
import "./PlantCard.css"
import UpdateImg from "./update.png"
import DeleteImg from "./delete.png"

function PlantCard({_id,name,category,image,price,description}) {
  return (
    <div className='card-container'>
     
        <h1 className="plant-name">{name} {_id}</h1>
        <span className='plant-category'>{category}</span>
       
        <span className='plant-price'>{price}Rs</span>
        <p className='plant-description'>{description}</p>
        
       
        <img className="plant-image" src={image} />
      <div>
       <img src={UpdateImg} className='card-btn update' />
      
       <img src={DeleteImg} className='card-btn delete' onClick={()=>{
        deletePlant(_id)
       }}/>
       </div>
    </div>
  )
}

export default PlantCard