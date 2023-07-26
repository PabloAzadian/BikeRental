import { useState } from "react";

function BikeBox({ data, bikeID }) {
  const [bikeLoad, setBikeLoad] = useState(true);

  return (
    <>
      {data[bikeID].map((bike, id) => ( // Changed 'bike' to 'bike' here
        <div key={id} className="box-bikes">
          {/* bike */}
          <div className="pick-bike">
            {bikeLoad && <span className="loader"></span>}
            <img
              style={{ display: bikeLoad ? "none" : "block" }}
              src={bike.img}
              alt="bike_img"
              onLoad={() => setBikeLoad(false)}
            />
          </div>
          {/* description */}
          <div className="pick-description">
            <div className="pick-description__price">
              <span>${bike.price}</span>/ rent per day
            </div>
            <div className="pick-description__table">
              <div className="pick-description__table__col">
                <span>Model</span>
                <span>{bike.name}</span> {/* Changed 'bike.model' to 'bike.name' */}
              </div>
              <div className="pick-description__table__col">
                <span>Brand</span>
                <span>{bike.brand}</span> {/* Added 'brand' */}
              </div>
              <div className="pick-description__table__col">
                <span>Frame Material</span>
                <span>{bike.frameMaterial}</span> {/* Added 'frameMaterial' */}
              </div>
              <div className="pick-description__table__col">
                <span>Wheel Size</span>
                <span>{bike.wheelSize}</span> {/* Added 'wheelSize' */}
              </div>
              <div className="pick-description__table__col">
                <span>Gears</span>
                <span>{bike.gears}</span> {/* Added 'gears' */}
              </div>
              <div className="pick-description__table__col">
                <span>Brake Type</span>
                <span>{bike.brakeType}</span> {/* Added 'brakeType' */}
              </div>
              <div className="pick-description__table__col">
                <span>Weight</span>
                <span>{bike.weight}</span> {/* Added 'weight' */}
              </div>
            </div>
            {/* btn cta */}
            <a className="cta-btn" href="#booking-section">
              Reserve Now
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

export default BikeBox;

