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
              element: <ToyDetails></ToyDetails>,
              loader:({params})=>fetch(`http://localhost:5174/all-toys/${params._id}`)
          },
          {
              path: "/add-toys",
              element:<AddToys></AddToys>
          }
      ]
    },
    
  ]);



export default router;