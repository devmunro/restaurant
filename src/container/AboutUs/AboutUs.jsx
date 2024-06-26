import React from "react";
import { images } from "../../constants";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" className="app__aboutus-img" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app_aboutus-content_about">
        <h1 className="headtext__cormorant">ABOUT US</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__image" />
        <p className="p__opensans">
          Enjoy innovative dishes and craft beers in a cozy, contemporary
          setting. Perfect for a casual bite or a relaxed evening out.
        </p>
        <button type="button" className="custom__button">
          Read More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife" />
      </div>
      <div className="app_aboutus-content_history">
        <h1 className="headtext__cormorant">OUR HISTORY</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__image" />
        <p className="p__opensans">
        Enjoy innovative dishes and craft beers in a cozy, contemporary
          setting. Perfect for a casual bite or a relaxed evening out.
        </p>
        <button type="button" className="custom__button">
          Read More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
