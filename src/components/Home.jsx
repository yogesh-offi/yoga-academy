import React from 'react'
import '../assets/css/Home.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const naviagte = useNavigate();
    const onhandleStart = () => {
        naviagte('/plans');
    }

  return (
    <div className='home'>
        <Navbar />
        <div className='home1'>
            <h1>Welcome to Yoga Academy</h1>
            <div className='piceven'></div>
            <div className='texteven'>
                <p><p className='pheading'>Find lifestyle to the yoga<br/></p>
                Through and through we were trying to make our Yoga studio a peaceful, 
                meditational place of tranquility, which according to our ever-growing 
                list of attendees we've succeeded at.</p>
            </div>
            <div className='picodd'></div>
            <div className='textodd'>
                <p><p className='pheading'>Yoga Academy for Everyone<br/></p>
                Through and through we were trying to make our Yoga studio a peaceful, 
                meditational place of tranquility, which according to our ever-growing 
                list of attendees we've succeeded at.</p>
            </div>
            <button className='homebtn' onClick={onhandleStart}>Start with us</button>
        </div>
       <div className='Footer'>
        <Footer/>
        </div> 
    </div>
  )
}

export default Home