import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import emailjs from "@emailjs/browser";
import "./Careers.css";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    email: "",
    phone: "",
    shift: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS credentials
      const templateParams = {
        from_name: formData.name,
        dob: formData.dob,
        email: formData.email,
        phone: formData.phone,
        shift: formData.shift,
        to_name: "Heaven in a Jar",
        message: `
          New Job Application:
          Name: ${formData.name}
          Date of Birth: ${formData.dob}
          Email: ${formData.email}
          Phone: ${formData.phone}
          Preferred Shift: ${formData.shift}
        `,
        reply_to: formData.email,
      };

      await emailjs.send(
        "service_05m1vqe", // Replace with your service ID
        "template_o24oh2e", // Replace with your template ID
        templateParams,
        "5JxE33UjOIAwN9AqG" // Replace with your public key
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        dob: "",
        email: "",
        phone: "",
        shift: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="careers-page">
      <Navbar />
      <div className="careers-hero">
        <h1>Join Our Team</h1>
        <p>Be part of creating sweet moments for our customers</p>
      </div>

      <div className="careers-content">
        <section className="careers-form-section">
          <h2>Job Application</h2>
          {submitStatus === "success" && (
            <div className="success-message">
              Thank you for your application! We'll be in touch soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="error-message">
              There was an error submitting your application. Please try again
              later.
            </div>
          )}
          <form onSubmit={handleSubmit} className="application-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label>Preferred Shift</label>
              <div className="shift-options">
                <label className="shift-option">
                  <input
                    type="radio"
                    name="shift"
                    value="morning"
                    checked={formData.shift === "morning"}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                  Morning 11 AM - 5 PM (Select if you are interested in making
                  desserts)
                </label>
                <label className="shift-option">
                  <input
                    type="radio"
                    name="shift"
                    value="evening"
                    checked={formData.shift === "evening"}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                  Evening 5 PM - 10 PM (Select if you are interested in a
                  customer facing role)
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;
