import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Catering.css";

// Import images
import trayImg from "../../assets/catering/tray.jpg";
import cups2oz from "../../assets/catering/2oz-cups.jpg";
import cups3oz from "../../assets/catering/3oz-cups.png";
import halfGallon from "../../assets/catering/half-gallon.jpg";
import foilTray from "../../assets/catering/foiltray.jpg";

const Catering = () => {
  const [showModal, setShowModal] = useState(false);

  const handleContactClick = () => {
    console.log("Button clicked, setting showModal to true");
    setShowModal(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setShowModal(false);
  };

  console.log("Current showModal state:", showModal);

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
              <p className="section-price">
                <strong>$3.79 each</strong> (minimum order: 24)
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
            <p className="section-price">
              <strong>$2.50 each</strong> (minimum order: 24)
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
              Our signature dessert trays are perfect for any gathering. Each
              tray is carefully curated with a selection of our most popular
              desserts, beautifully arranged for your special occasion. Choose
              from a convenient foil tray or an elegant glass tray.
            </p>
            <div
              className="tray-options"
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <div
                className="tray-option"
                style={{
                  flex: "1 1 220px",
                  maxWidth: 300,
                  background: "#fff8f0",
                  borderRadius: 10,
                  padding: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                <img
                  src={foilTray}
                  alt="Signature Dessert Foil Tray"
                  className="section-image"
                  style={{
                    width: "100%",
                    borderRadius: 8,
                    marginBottom: "1rem",
                  }}
                />
                <h3 style={{ margin: "0.5rem 0" }}>Foil Tray</h3>
                <p className="section-price">
                  <strong>$50 per tray</strong> 110oz (serves 25-30)
                </p>
              </div>
              <div
                className="tray-option"
                style={{
                  flex: "1 1 220px",
                  maxWidth: 300,
                  background: "#fff8f0",
                  borderRadius: 10,
                  padding: "1rem",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  textAlign: "center",
                }}
              >
                <img
                  src={trayImg}
                  alt="Signature Dessert Glass Tray"
                  className="section-image"
                  style={{
                    width: "100%",
                    borderRadius: 8,
                    marginBottom: "1rem",
                    border: "2px solid #a47148",
                  }}
                />
                <h3 style={{ margin: "0.5rem 0" }}>Glass Tray</h3>
                <p className="section-price">
                  <strong>$60 per tray</strong> 96oz (serves 20-25)
                </p>
              </div>
            </div>
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
            <p className="section-price">
              <strong>$30.99 each</strong> 64oz (serves 10-12)
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
          <button className="contact-button" onClick={handleContactClick}>
            Get in Touch
          </button>
        </section>
      </div>

      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#FFEDD8",
              padding: "2rem",
              borderRadius: "10px",
              maxWidth: "400px",
              width: "90%",
              textAlign: "center",
              position: "relative",
            }}
          >
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: "#040404",
                fontFamily: '"Quintessential", serif',
              }}
            >
              Contact Us
            </h2>
            <div style={{ marginBottom: "1.5rem" }}>
              <p
                style={{
                  margin: "0.5rem 0",
                  fontSize: "1.1rem",
                  color: "#040404",
                }}
              >
                Email: heaveninajardesserts@gmail.com
              </p>
              <p
                style={{
                  margin: "0.5rem 0",
                  fontSize: "1.1rem",
                  color: "#040404",
                }}
              >
                Phone: (832) 532-7149
              </p>
            </div>
            <button
              onClick={closeModal}
              style={{
                background: "#A47148",
                color: "white",
                border: "none",
                padding: "0.5rem 1.5rem",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Catering;
