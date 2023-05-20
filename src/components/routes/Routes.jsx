import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../home/Home";
import Main from "../home/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AllToys from "../all-toys/allToys";



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
              loader:()=>fetch('/public/data.json')
              
          }
      ]
    },
    
  ]);



export default router;