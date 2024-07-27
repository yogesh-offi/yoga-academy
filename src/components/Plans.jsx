import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../assets/css/Plans.css';
import plan1 from 'D:/AAD/app/src/assets/images/plan1.webp';
import plan2 from 'D:/AAD/app/src/assets/images/plan2.webp';
import plan3 from 'D:/AAD/app/src/assets/images/plan3.webp';
import plan4 from 'D:/AAD/app/src/assets/images/plan4.webp';
import plan5 from 'D:/AAD/app/src/assets/images/plan5.webp';
import plan6 from 'D:/AAD/app/src/assets/images/plan6.webp';
const Plans = () => {
  return (
    <div className='plan'>
    <Navbar />
    <h1>Popular Yoga Plans At Our Academy</h1>
    <div className='planlist1'>
        <div className='planItem'>
            <div className='planPic'>
              <img src={plan1} alt='plan1' width={'300px'} height={"200px"}  />
            </div>
            <div className='planText'>
                <h2>Quick Bite Yoga</h2>
                <p>₹999</p>
                <p>05:30 am - 06:15 am</p>
                <button className='viewDetails'>View Details</button>
                <button className='buyNow'>Buy Now</button>
            </div>
        </div>
        <div className='planItem'>
            <div className='planPic'>
            <img src={plan2} alt='plan1' />
            </div>
            <div className='planText'>
                <h2>Yoga For Beginners</h2>
                <p>₹499</p>
                <p>05:00 pm - 06:00 pm</p>
                <button className='viewDetails'>View Details</button>
                <button className='buyNow'>Buy Now</button>
            </div>
        </div>
        <div className='planItem'>
            <div className='planPic'>
            <img src={plan3} alt='plan1' />
            </div>
            <div className='planText'>
                <h2>Meditation Weekend</h2>
                <p>₹799</p>
                <p>05:30 am - 06:15 am</p>
                <button className='viewDetails'>View Details</button>
                <button className='buyNow'>Buy Now</button>
            </div>
        </div>
    </div>
    <div className='planlist2'>
        <div className='planItem'>
            <div className='planPic'>
            <img src={plan4} alt='plan1' />
            </div>
            <div className='planText'>
                <h2>Personalized Yoga Session</h2>
                <p>₹9999</p>
                <p>Flexible time</p>
                <button className='viewDetails'>View Details</button>
                <button className='buyNow'>Buy Now</button>
            </div>
        </div>
        <div className='planItem'>
            <div className='planPic'>
            <img src={plan5} alt='plan1' />
            </div>
            <div className='planText'>
                <h2>Fitness Yoga</h2>
                <p>₹399</p>
                <p>07:00 am - 08:00 am</p>
                <button className='viewDetails'>View Details</button>
                <button className='buyNow'>Buy Now</button>
            </div>
        </div>
        <div className='planItem'>
            <div className='planPic'>
            <img src={plan6} alt='plan1' />
            </div>
            <div className='planText'>
                <h2>Evening Yoga</h2>
                <p>₹399</p>
                <p>05:00 pm - 06:00 pm</p>
                <button className='viewDetails'>View Details</button>
                <button className='buyNow'>Buy Now</button>
            </div>
        </div>
    </div>
    <Footer style={{ position: "absolute", top: "975px" }} />
</div>
  )
}

export default Plans