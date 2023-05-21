import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../home/Home";
import Main from "../home/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllToys from "../all-toys/allToys";
import AddToys from "../add-toys/AddToys";
import ToyDetails from "../all-toys/ToyDetails";
import PrivateRoutes from "./PrivateRoutes";
import MyToys from "../my-toys/MyToys";
import MyToysUpdate from "../my-toys/MyToysUpdate";
import Blog from "../Blog/Blogs";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children: [
        {
          path: "/",
          element:<Main></Main>
          },
          {
              path: "/login",
              element:<Login></Login>
          },
          {
              path: "/register",
              element:<Register></Register>
          },
          {
              path: "/all-toys",
              element: <AllToys></AllToys>,
              loader:()=>fetch('http://localhost:5000/all-toys')
              
          },
          {
              path: "all-toys/:id",
              element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
              loader:({params})=>fetch(`http://localhost:5174/all-toys/${params._id}`)
          },
          {
              path: "/add-toys",
              element:<PrivateRoutes><AddToys></AddToys></PrivateRoutes>
          },
          {
              path: "/my-toys",
              element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>

          },
          {
              path: "/update/:id",
              element: <PrivateRoutes><MyToysUpdate></MyToysUpdate></PrivateRoutes>,
              loader:({params})=>fetch(`http://localhost:5174/all-toys/${params._id}`)
          },
          {
              path: "/blogs",
              element:<Blog></Blog>
          }
      ]
    },
    
  ]);



export default router;