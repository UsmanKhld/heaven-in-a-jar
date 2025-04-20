import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./About.css";
import hiajLogo from "../../assets/hiaj-logo.png";
import store from "../../assets/Store.jpg";
import giftBox from "../../assets/gift-box.jpg";
import giftBag from "../../assets/gift-bag.jpg";

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <div className="about-hero">
        <img src={hiajLogo} alt="Heaven in a Jar Logo" className="about-logo" />
        <h1>Our Sweet Story</h1>
      </div>

      <div className="about-content">
        <section className="about-section story-section">
          <div className="section-content">
            <h2>Our Journey</h2>
            <p>
              Founded in Sugar Land, TX, Heaven in a Jar began when Arshila
              Khalid, the owner, wanted to pursue her passion for making
              desserts. Thus, a family-owned dessert shop was born with a big
              dream. What started as a passion for creating the perfect dessert
              has grown into a beloved destination for sweet treats that bring
              joy to every occasion.
            </p>
            <img src={store} alt="Our Store" className="section-image" />
          </div>
        </section>

        <section className="about-section mission-section">
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              At Heaven in a Jar, we believe that every dessert should be a
              moment of pure bliss. We're committed to crafting exceptional
              treats using the finest ingredients, traditional recipes, and a
              touch of modern innovation. Our mission is to create unforgettable
              experiences, one sweet bite at a time.
            </p>
            {/* <img
							src="/src/assets/DubaiChocSpotlight.png"
							alt="Our Signature Desserts"
							className="section-image"
						/> */}
          </div>
        </section>

        <section className="about-section values-section">
          <div className="section-content">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <img src={giftBox} alt="Quality" className="value-image" />
                <h3>Quality</h3>
                <p>
                  We never compromise on the quality of our ingredients or the
                  care we put into every creation.
                </p>
              </div>
              <div className="value-card">
                <img src={giftBag} alt="Creativity" className="value-image" />
                <h3>Creativity</h3>
                <p>
                  We constantly innovate to bring you unique and exciting
                  dessert experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
