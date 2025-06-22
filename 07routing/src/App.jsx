// App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/ContactUs';
import About from './components/AboutUs';
import SignUp from './components/SignUp';
import Login from './components/Login';
import NotFound from './components/NotFound';
import FounderProfile from './components/FounderProfile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement:<NotFound/>
  },
  {
    path: '/ContactUs',
    element: <Contact />,
    errorElement:<NotFound/>
  },
  {
    path: '/AboutUs',
    element: <About />,
      errorElement:<NotFound/>
  },
  {
    path: '/SignUp',  
    element: <SignUp />,
    errorElement:<NotFound/>
  },
  {
    path: '/Login',
    element: <Login />,
    errorElement:<NotFound/>
  },
  {
    path:'/Founder',
    element:<FounderProfile/>,
    errorElement:<NotFound/>
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
