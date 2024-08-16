import { createBrowserRouter } from "react-router-dom";
import Home from "../Pases/Home/Home";
import SignIn from "../Pases/SignIn/SignIn";
import SignUp from "../Pases/SignUp/SignUp";
import Layout from "./Layout/Layout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
       {
        path: "/",
        element: <Home/>,
      },
      {
        path: '/signIn',
        element: <SignIn/>
       },
       {
        path: '/signUp',
        element: <SignUp/>
       }
      ]
    },
  ]);
  export default router