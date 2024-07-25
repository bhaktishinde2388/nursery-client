import ReactDOM from "react-dom/client"
import Home from "./views/Home/Home"
import PlantView from "./views/PlantView/PlantView"
import PlantCard from "./components/PlantCard/PlantCard"

import{
    createBrowserRouter,RouterProvider
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))


const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
        path:"/PlantView",
        element:<PlantView/>
    },
    {
        path:"*",
        element:<h1>404 Not Found</h1>
    }
])
root.render(
    <>
    <RouterProvider router={router}/>
   
    </>
)