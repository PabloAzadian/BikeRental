import { useState } from "react";
import BikeBox from "../BikeBox";
import { BIKE_DATA } from "../BikeData"
import "./PickBike.css"

function PickBike() {
  const [active, setActive] = useState("SecondBike");
  const [colorBtn, setColorBtn] = useState("btn1");

  const btnID = (id) => {
    setColorBtn(colorBtn === id ? "" : id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section id="pick-bike" className="pick-section">
        <div className="pick-container">
            <div className="pick-container__title">
              <h3>Bike Models</h3>
              <h2>Discover Your Perfect Ride</h2>
              <p>
              Choose from a variety of our amazing bikes to rent for your next journey!
              </p>
            </div>
            <div className="pick-container__bike-content">
              {/* pick bike */}
              <div className="pick-box">
                <button
                  onClick={() => {
                    setActive("FirstBike");
                    btnID("btn1");
                  }}
                >
                  Trek Domane SL 5
                </button>
                <button
                  id="btn2"
                  onClick={() => {
                    setActive("SecondBike");
                    btnID("btn2");
                  }}
                >
                  Giant Talon 3
                </button>
                <button
                  id="btn3"
                  onClick={() => {
                    setActive("ThirdBike");
                    btnID("btn3");
                  }}
                >
                  Specialized Sirrus X 4.0
                </button>
                <button
                  id="btn4"
                  onClick={() => {
                    setActive("FourthBike");
                    btnID("btn4");
                  }}
                >
                  Cannondale Synapse Carbon Disc
                </button>
                <button
                  id="btn5"
                  onClick={() => {
                    setActive("FifthBike");
                    btnID("btn5");
                  }}
                >
                  Scott Spark 960
                </button>
                <button
                  id="btn6"
                  onClick={() => {
                    setActive("SixthBike");
                    btnID("btn6");
                  }}
                >
                  Bianchi Infinito CV Ultegra
                </button>
              </div>

              {active === "FirstBike" && <BikeBox data={BIKE_DATA} bikeID={0} />}
              {active === "SecondBike" && <BikeBox data={BIKE_DATA} bikeID={1} />}
              {active === "ThirdBike" && <BikeBox data={BIKE_DATA} bikeID={2} />}
              {active === "FourthBike" && <BikeBox data={BIKE_DATA} bikeID={3} />}
              {active === "FifthBike" && <BikeBox data={BIKE_DATA} bikeID={4} />}
              {active === "SixthBike" && <BikeBox data={BIKE_DATA} bikeID={5} />}
              </div>
            </div>
      </section>
    </>
  );
}

export default PickBike;