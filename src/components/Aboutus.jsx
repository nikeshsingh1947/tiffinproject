import React from 'react';
import './AboutUs.css';
import Profile from "./depeakch.png"
const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="section-heading">About Us</h2>
        <p className="paragraph">
        Welcome to Delhi Tiffinwala, your go-to destination for delicious and
        nutritious meals delivered right to your doorstep. We take pride in
        serving authentic and homely Indian cuisines prepared with love and care.
      </p>

      <p className="paragraph">
        At Delhi Tiffinwala, we understand the value of a well-balanced and
        flavorful meal. Our team of skilled chefs, led by our visionary CEOs
        Deepak Choudhary and Lalit Arora, is dedicated to providing you with a
        culinary experience that tantalizes your taste buds and satisfies your
        cravings.
      </p>

      <p className="paragraph">
        Founded with a passion for good food and a commitment to customer
        satisfaction, Delhi Tiffinwala operates as a cloud kitchen-based
        business. This innovative approach allows us to focus on creating
        mouthwatering dishes while ensuring prompt and efficient delivery to
        your doorstep.
      </p>
      </div>
      <div className="ceo-container">
        <h2 className="section-heading">CEO Details</h2>
        <div className="ceo-details">
          <img
            src={Profile} // Replace with CEO image URL
            alt="CEO"
            className="ceo-image"
          />
          <div className="ceo-info">
            <h3>Deepak Chowdhary</h3>
            <p className="ceo-description">  
        CEO Deepak Chowdhary and Lalit Arora, the driving forces behind Delhi
        Tiffinwala, bring a wealth of experience and culinary expertise to the
        table. Their vision is to redefine the tiffin service industry by
        combining traditional recipes with modern convenience, making quality
        meals accessible to everyone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;