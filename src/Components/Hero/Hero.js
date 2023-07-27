import Bike from "../../images/bikes/BianchiInfinitoCVUltegra.png";
import BgSkyline from "../../images/backgrounds/BgPng2.png";
import "./Hero.css"



function Hero() {
    return(
        
    <section className="hero-container">
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgSkyline} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Your Ride, Your Way</h4>
              <h1>
                Unleash the <span>Cyclist</span> Within You
              </h1>
              <p>
                Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="hero-content__text__btns">
                <a className="btn1" href="#booking-section">
                Book Ride
                </a>
                <a className="btn2" href="#plan-trip">
                Learn More
                </a>
              </div>
            </div>

            {/* img */}
            <img
              src={Bike}
              alt="-img"
              className="hero-content__bike-img"
            />
          </div>
        </div>

      </section>
            </section>
        
        
    )
}

export default Hero;