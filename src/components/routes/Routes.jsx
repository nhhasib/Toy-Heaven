import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../home/Home";
import Main from "../home/Main";
import Login from "../Login/Login";
import Register from "../Register/Register";



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
          }
      ]
    },
    
  ]);



export default router;