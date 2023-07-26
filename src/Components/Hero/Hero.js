import Bike from "../../images/BianchiInfinitoCVUltegra.png";
import BgSkyline from "../../images/BgPng2.png";
import Button from "react-bootstrap/Button"
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
                <Button className="p-3">Book Ride</Button>
                <Button className="btn-dark p-4">Learn More</Button>
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