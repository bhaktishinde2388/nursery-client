import ReactDOM from "react-dom/client"
import Home from "./views/Home/Home"
import PlantView from "./views/PlantView/PlantView"
import PlantCard from "./components/PlantCard/PlantCard"
import AddPlant from "./views/AddPlant/AddPlant"
import{
    createBrowserRouter,RouterProvider
} from "react-router-dom"
import UpdatePlant from "./views/UpdatePlant/UpdatePlant"


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
        path:"/add",
        element:<AddPlant/>
    },
    {
        //dynamic routing
        path:"/edit:id",
        element:<UpdatePlant/>
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