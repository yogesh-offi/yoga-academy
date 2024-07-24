import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='navbar'>
        <h2>Yoga Academy</h2>
        <button onClick={()=>{navigate('/home')}}>Home</button>
        <button onClick={()=>{navigate('/plans')}}>plans</button>
        <button onClick={()=>{navigate('/about')}}>About</button>
        <button onClick={()=>{navigate('/contact')}}>ContactUs</button>
        <button onClick={()=>{navigate('/login')}}>Login/Signup</button>
    </div>
  )
}

export default Navbar;