import React from "react";
import { images } from "../../constants";
import "./Header.css";
import { SubHeading } from "../../components";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">Gastro Pub for the Senses</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        We are a gastro pub located in the heart of the city. We are the best in
        town and provide the best food and drinks for our customers.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__header-img">
      <img src={images.gastro} alt="header" style={{ margin: "1rem 2rem" }} />
    </div>
  </div>
);

export default Header;
