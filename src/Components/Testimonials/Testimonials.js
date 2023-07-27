import React from 'react'
import "./Testimonials.css"
import Image from "react-bootstrap/Image"
import Biden from "../../images/Clients/Joe biden.png"
import Podolski from "../../images/Clients/Lukas Podolski.png"
import CJ from "../../images/Clients/Carl Jhonson.png"
import Quotations from "../../images/icons/quotation marks.png"

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials-section">
            <div className="testimonials-container">
                <div className="testimonials-title-container">
                    <h5>Client Testimonials</h5>
                    <h2>Our Success in their Words</h2>
                    <p>Experience our journey of success through the words of our clients. These testimonials illustrate the powerful and positive effects of our services.</p>
                </div>
                <div className='testimonials-boxes-container'>
                    <div className='testimonials-box'>
                        <p className='testimonials-box-quote'>
                        "Even though i had a <a href='https://www.youtube.com/shorts/9mRFoDWMtpY'  target="_blank">little incident</a>, I was impressed by the eco-friendly
                         approach and the excellent condition of the bikes.It's essential to promote
                         active lifestyles and reduce our carbon footprint, and this rental service 
                         does just that. Keep up the good work!"</p>
                        <div className='testimonials-box-footer'>
                            <div className='profile'>
                                <Image 
                                width="55"
                                height="55"
                                src={Biden} roundedCircle />
                                <h5>Boe Jiden</h5>
                            </div>
                            <Image width="60" height="40" src={Quotations}/>
                        </div>
                    </div>
                    <div className='testimonials-box'>
                        <p className='testimonials-box-quote'>
                        "Exploring the city on these comfortable bikes was a delight. The routes
                         recommended were perfect for leisurely rides, and it's a great way to 
                         unwind and stay in shape while traveling. Highly recommended!"</p>
                        <div className='testimonials-box-footer'>
                            <div className='profile'>
                                <Image 
                                width="55"
                                height="55"
                                src={Podolski} roundedCircle />
                                <h5>Pukas Lodolski</h5>
                            </div>
                            <Image width="60" height="40" src={Quotations}/>
                        </div>
                    </div>
                    <div className='testimonials-box'>
                        <p className='testimonials-box-quote'>
                        "This bike rental joint is off the chain! The wheels they got are straight-up
                         fire, and the service? It's on point, man! I had a blast cruisin' around the 
                         city, feelin' like a boss on their slick bikes. No doubt, I'm rollin' back for more!"</p>
                        <div className='testimonials-box-footer'>
                            <div className='profile'>
                                <Image 
                                width="55"
                                height="55"
                                src={CJ} roundedCircle />
                                <h5>Carl Jhonson</h5>
                            </div>
                            <Image width="60" height="40" src={Quotations}/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
  )
}

export default Testimonials