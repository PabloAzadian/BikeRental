import React from 'react'
import Bike from "../../images/icons/BikeIconCircle.png"
import CustomerSupport from "../../images/icons/CustomerSupportIcon.png"
import Explore from "../../images/icons/ExploreIcon.png"
import "./PlanTrip.css"

function PlanTrip() {
  return (
    <section id="plan-trip" className='plan-trip-container'>
        <div className='plan-trip-title'>
            <h3>Plan your trip now</h3>
            <h2>Quick and easy bike rental</h2>
        </div>
        <div className='plan-trip-icon-boxes'>
            <div className='plan-trip-icon-box'>
                <img className="bike-img" src={Bike}/>
                <h3>Choose Your Bike</h3>
                <p> We offer a diverse range of bikes to suit your biking needs. From city bikes
                for leisurely rides to mountain bikes for off-road adventures, we have the perfect bike for you.</p> 
            </div>
            <div className='plan-trip-icon-box'>
                <img className="customer-support-img" src={CustomerSupport}/>
                <h3>Contact Us</h3>
                <p> Our team of biking enthusiasts is here to assist you with any inquiries or 
                doubts you may have. We're more than happy to help you plan your biking journey.</p> 
            </div>
            <div className='plan-trip-icon-box'>
                <img className="explore-img" src={Explore}/>
                <h3>Let's Ride</h3>
                <p> Whether you're exploring scenic trails or cruising through the city,
                we've got you covered with our wide selection of bikes.</p> 
            </div>
        </div>
    </section>
  )
}

export default PlanTrip