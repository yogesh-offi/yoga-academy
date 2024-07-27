import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import '../assets/css/Navbar.css';
import { Context } from './GlobeData';

const Navbar = () => {
    const navigate = useNavigate();
    const {loggedIn,LogOut,isAdmin} = useContext(Context);
  return (
    <div className='navbar'>
        <h2>Yoga Academy</h2>
        <button onClick={()=>{navigate('/home')}}>Home</button>
        <button onClick={()=>{navigate('/plans')}}>plans</button>
        {(isAdmin)?<button onClick={()=>{navigate('/courses')}}>Institutions</button>:''}
        {(loggedIn)?<button onClick={()=>{navigate('/admission')}}>Admission</button>:''}
        {(loggedIn && isAdmin)?<button onClick={()=>{navigate('/adminusers')}}>Users</button>:''}
        <button onClick={()=>{navigate('/about')}}>About</button>
        <button onClick={()=>{navigate('/contact')}}>ContactUs</button>
        {(loggedIn) ? <button onClick={()=>{LogOut();navigate('/home')}}>Logout</button> : 
        <button onClick={()=>{navigate('/login')}}>Login/signUp</button>}

    </div>
  )
}

export default Navbar;
