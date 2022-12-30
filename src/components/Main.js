import React from 'react'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Firstpage from './Firstpage/Firstpage'
import Optika from './Optica/Optika'
import Order from './Order/Order';
import Sun from './Sun/Sun'
import Test from './Test/Test'


const router = createBrowserRouter([
    {
      path: "/",
      element: <Firstpage/>
    },
    {
      path: "/optika",
      element: <Optika/>
    },
    {
        path: "/sun",
        element: <Sun/>
    },
    {
        path: "/test",
        element: <Test/>
    },
    {
        path: "/order",
        element: <Order/>
    }
  ]);

export default function Main() {
  return (
        <RouterProvider router={router} />
  )
}
