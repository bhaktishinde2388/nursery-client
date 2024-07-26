import React, { useState } from 'react'
import "./AddPlant.css"
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

function AddPlant() {

  const [name,setName] = useState("")
  const [category,setCategory] = useState("")
  const [price,setPrice] = useState(0)
  const [description,setDescription] = useState("")
  const [image,setImage] =useState("")


  const addPlant = async ()=>{
    toast.loading("Adding Plant.......")
    if(!name || !price || !category || !description || !image){
      toast.error("plaese enter all detail")

      return
    }

    const response = await axios.post(`${process.env.REACT_APP_API_URL}/plant`, {
      name:name,
      category:category,
      price:price,
      image:image,
      description:description,
    })

    toast.dismiss()

   toast.success(response.data.message)

   setName("")
   setCategory("")
   setPrice("")
   setDescription("")
   setImage("")
  }

  return (
    <div>
        <h1>Add Plant</h1>

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


<button type='button' onClick={addPlant} className='add-plant-btn'>Add Plant</button>
        </form>

        <Toaster/>
    </div>
  )
}

export default AddPlant