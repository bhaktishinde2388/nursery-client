import React from 'react'
import {useState,useEffect } from "react"
import axios from "axios"
import "./Home.css"
import PlantCard from '../../components/PlantCard/PlantCard';
import toast, { Toaster } from 'react-hot-toast';
import ImgAdd from "./add (1).png"
import { Link } from 'react-router-dom';
import HoverAddImg from "./binocular.png"


function Home() {
  //plants array
    const [plants , setPlants] = useState([])

const loadPlants = async () => {
  toast.loading("Loading Plants.........")
const response = await axios.get(`${process.env.REACT_APP_API_URL}/plants`)

toast.dismiss()
toast.success("Plants Loaded Successfully........")

setPlants(response.data.data)
}

useEffect(()=>{
  loadPlants()
},[])

  return (
    <div>
       <h1>Home Page📌</h1>
       {
        //applied mapping on plants array
        plants.map((plant , i)=>{
            //destructured plant object
            const {
                _id,
                name,
                category,
                price,
                image,
                description,
              } = plant

            return <PlantCard 
                   key={i}
                  _id={_id}
                   name={name}
                   category={category}
                   price={price}
                   image={image}
                   description={description}
                   loadPlants={loadPlants}

            />
        })
       }
       <Toaster/>

<Link to="/add">
<img src={ImgAdd} className='add-img'/>
</Link>
    </div>
  )
}

export default Home