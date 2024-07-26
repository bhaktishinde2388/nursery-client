import React from 'react'
import "./UpdatePlant.css"
import { useParams } from 'react-router-dom'
import { useState , useEffect } from "react"

function UpdatePlant() {
    
    const {id}= useParams();

    const [name,setName] = useState("")
    const [category,setCategory] = useState("")
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState("")
    const [image,setImage] =useState("")

const updatePlant = async ()=>{
  const response = await axios.put(`${process.env.REACT_APP_API_URL}/plant/${id}`,{
    name:name,
    category:category,
    price:price,
    image:image,
    description:description
})

}

const loadPlant = async (id) =>{

  if(!id){
      return
  }

  const response = await axios.get(`${process.env.REACT_APP_API_URL}/plant/${id}`)
 
  const{name,category,price,image,description} = response.data.data     
 

  setname(name)
  setcategory(category)
  setprice(price)
  setiamge(image)
  setdescription(description)

}       


useEffect(()=>{
    if(id){
        updatePlant()
    }
}, [id])

return (
  <div>

<form className='form-container'>
          <input type='text'
          placeholder='Enter Plant Name'
          className='plant-input-box'
          value={name}
          onChange={(e)=>setName(e.target.value)}
          />

<input type='text'
          placeholder='Enter Plant Category'
          className='plant-input-box'
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
          />

<input type='number'
          placeholder='Enter Plant Price'
          className='plant-input-box'
          value={price}
          onChange={(e)=>setPrice(e.target.value)}
          />

<input type='text'
          placeholder='Enter Plant Description'
          className='plant-input-box'
          value={description}
          onChange={(e)=>setDescription(e.target.value)}
          />

<img src={image}></img>
<input type='text'
          placeholder='Enter Plant Image Url'
          className='plant-input-box'
          value={image}
          onChange={(e)=>setImage(e.target.value)}
          />


<button type='button'onClick={updatePlant} className='add-plant-btn'>Add Plant</button>
      </form>
  </div>
)
}

export default UpdatePlant


