import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/')
    }
  return (
    <div>
       <h1 className='text-2xl'>Error 404 Page not found </h1>
        <button onClick={handleClick} className='bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700'>Go Back To Home</button>
    </div>
    
  )
}

export default NotFound