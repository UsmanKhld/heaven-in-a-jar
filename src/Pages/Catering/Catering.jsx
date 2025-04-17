import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Catering.css";

// Import images
import trayImg from "../../assets/catering/tray.jpg";
import cups2oz from "../../assets/catering/2oz-cups.jpg";
import cups3oz from "../../assets/catering/3oz-cups.png";
import halfGallon from "../../assets/catering/half-gallon.jpg";
import Footer from "../../Components/Footer/Footer";

const Catering = () => {
  return (
    <div className="catering-page">
      <Navbar />
      <div className="catering-hero">
        <h1>Catering Services</h1>
        <p>Perfect for events, parties, and special occasions</p>
      </div>

      <div className="catering-content">
        <section className="catering-section">
          <section className="catering-section">
            <div className="section-content">
              <h2>3oz Dessert Cups</h2>
              <p>
                Our 3oz dessert cups offer a more substantial portion while
                still allowing guests to enjoy multiple flavors. Perfect for
                weddings and larger events.
              </p>
              <img
                src={cups3oz}
                alt="3oz Dessert Cups"
                className="section-image"
              />
            </div>
          </section>
          <div className="section-content">
            <h2>2oz Dessert Cups</h2>
            <p>
              Perfect for sampling multiple flavors, our 2oz dessert cups are
              ideal for cocktail parties and events where guests want to try a
              little bit of everything.
            </p>
            <img
              src={cups2oz}
              alt="2oz Dessert Cups"
              className="section-image"
            />
          </div>
        </section>
        <section className="catering-section">
          <div className="section-content">
            <h2>Signature Tray</h2>
            <p>
              Our signature dessert tray is perfect for any gathering. Each tray
              is carefully curated with a selection of our most popular
              desserts, beautifully arranged for your special occasion.
            </p>
            <img
              src={trayImg}
              alt="Signature Dessert Tray"
              className="section-image"
            />
          </div>
        </section>

        <section className="catering-section">
          <div className="section-content">
            <h2>Half Gallon Jars</h2>
            <p>
              For those who want to take home a larger portion of their favorite
              desserts, our half gallon jars are the perfect choice. Great for
              family gatherings and office parties.
            </p>
            <img
              src={halfGallon}
              alt="Half Gallon Jars"
              className="section-image"
            />
          </div>
        </section>

        <section className="catering-contact">
          <h2>Interested in Our Catering Services?</h2>
          <p>
            Contact us to discuss your event needs and get a custom quote. We'll
            work with you to create the perfect dessert experience for your
            special occasion.
          </p>
          <button className="contact-button">Get in Touch</button>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Catering;
