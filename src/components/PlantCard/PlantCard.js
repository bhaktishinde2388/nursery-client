import React from 'react'
import "./PlantCard.css"
import UpdateImg from "./update.png"
import DeleteImg from "./delete.png"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import { Link } from 'react-router-dom';

function PlantCard({_id,name,category,image,price,description,loadPlants}) {


  
  const deletePlant  = async (plantId)=>{   
  const response =  await axios.delete(`${process.env.REACT_APP_API_URL}/plant/${plantId}`)
  toast.success(response.data.message)
  loadPlants()
  }


  return (
    <div className='card-container'>
     
        <h1 className="plant-name">{name}</h1>
        <span className='plant-category'>{category}</span>
       
        <span className='plant-price'>{price}Rs</span>
        <p className='plant-description'>{description}</p>
        
       
        <img className="plant-image" src={image} />
      <div>
        <Link to={`/edit/ ${_id}`}>
       <img src={UpdateImg} className='card-btn update' />
       </Link>
      
       <img src={DeleteImg} className='card-btn delete' onClick={()=>{
        deletePlant(_id)
       }}/>
       </div>
    </div>
  )
}

export default PlantCard