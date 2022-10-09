import React from "react";
import Carousel from "react-bootstrap/Carousel";

import bofb from "../Assets/Images/BOFB.png";
import korwe from "../Assets/Images/korwe.png";
import trekker from "../Assets/Images/trekker.png";

const LandingPage = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100 lndImg" src={bofb} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 lndImg"
            src={korwe}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 lndImg"
            src={trekker}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default LandingPage;
