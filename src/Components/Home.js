import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/banner.jpeg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
      <div className="home-bannerImage-container">
  <img src={BannerBackground} alt="" style={{ width: '100%', height: 'auto' }} />
</div>

        <div className="home-text-section">
          <h1 className="primary-heading">
          "Transforming Lives, One Event at a Time."
          </h1>
          <p className="primary-text">
          With a focus on compassion and collaboration, the Ngo Event Manager brings people together to inspire change and empower communities.
          </p>
          <button className="secondary-button">
            Start Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
