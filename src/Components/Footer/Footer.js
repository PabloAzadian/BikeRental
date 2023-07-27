import "./Footer.css"
import Phone from "../../images/phone.png"
import Mail from "../../images/mail.png"



function Footer() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer-content">
              <ul className="footer-content__1">
                <li>
                  <span>BIKE</span> Rental
                </li>
                <li>
                Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
                </li>
                <li>
                  <a href="tel:123456789">
                    <img height="20px" src={Phone}/>
                    &nbsp; (123) -456-789
                  </a>
                </li>
  
                <li>
                  <a
                    href="mailto: 
                  carrental@gmail.com"
                  >
                    <img height="20px" src={Mail}/>
                    &nbsp; bikerental@gmail.com
                  </a>
                </li>

              </ul>
  
              <ul className="footer-content__2">
                <li>Company</li>
                <li>
                  <a href="#home">New York</a>
                </li>
                <li>
                  <a href="#home">Careers</a>
                </li>
                <li>
                  <a href="#home">Mobile</a>
                </li>
                <li>
                  <a href="#home">Blog</a>
                </li>
                <li>
                  <a href="#home">How we work</a>
                </li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Working Hours</li>
                <li>Mon - Fri: 9:00AM - 9:00PM</li>
                <li>Sat: 9:00AM - 19:00PM</li>
                <li>Sun: Closed</li>
              </ul>
  
              <ul className="footer-content__2">
                <li>Subscription</li>
                <li>
                  <p>Subscribe your Email address for latest news & updates.</p>
                </li>
                <li>
                  <input type="email" placeholder="Enter Email Address"></input>
                </li>
                <li>
                  <button onClick={() => alert("You've registered for the newsletter")}className="submit-email">Submit</button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;