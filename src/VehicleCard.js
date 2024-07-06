import { useState, useEffect } from "react";
import vehicle01 from "./assets/vehicle01.png";
import vehicle02 from "./assets/vehicle02.png";
import vehicle03 from "./assets/vehicle03.png";
import vehicle04 from "./assets/vehicle04.png";
import vehicle05 from "./assets/vehicle05.png";
import vehicle06 from "./assets/vehicle06.png";
import { ReactComponent as Heart } from "./assets/vehicle-heart.svg";
import { ReactComponent as Mileage } from "./assets/vehicle-mileage.svg";
import { ReactComponent as Engine } from "./assets/vehicle-engine.svg";
import { ReactComponent as Color } from "./assets/vehicle-color.svg";
import { ReactComponent as Transmission } from "./assets/vehicle-transmission.svg";

const VehicleCard = ({ index, vehicle }) => {
  const fetchImage = (index) => vehicleImage[index];
  const vehicleImage = {
    0: vehicle01,
    1: vehicle02,
    2: vehicle03,
    3: vehicle04,
    4: vehicle05,
    5: vehicle06,
  };
  return (
    <div className="vehicle">
      <img
        src={`${fetchImage(index)}`}
        alt={vehicle.name}
        className="vehicle__img"
      />
      <Heart className="vehicle__like" />
      <div className="vehicle__price">${vehicle.price.toLocaleString()}</div>
      <h5 className="vehicle__name">{vehicle.name}</h5>
      <div className="vehicle__mileage">
        <Mileage className="vehicle__svg" />
        <p>{vehicle.mileage.toLocaleString()} km</p>
      </div>
      <div className="vehicle__engine">
        <Engine className="vehicle__svg" />
        <p>{vehicle.engine}</p>
      </div>
      <div className="vehicle__color">
        <Color className="vehicle__svg" />
        <p>{vehicle.color}</p>
      </div>
      <div className="vehicle__transmission">
        <Transmission className="vehicle__svg" />
        <p>{vehicle.transmission}</p>
      </div>
      <a class="btn vehicle__btn">Contact realtor</a>
    </div>
  );
};
export default VehicleCard;
