import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    companyName: "",
    companyLocation: "",
    message: "",
  });

  const onChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      ...formValues,
      access_key: "ba98dd84-1420-4088-bb16-31d444fb24f0",
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormValues({
          name: "",
          email: "",
          companyName: "",
          companyLocation: "",
          message: "",
        });
      } else {
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <ToastContainer />
      <div className="contact-section">
        <h2 className="section-title">Contact</h2>
        <div className="contact-link">
          <div className="contact-title">
            <h3 className="contact-links">
              <i className="bi bi-person"></i> Prasanth
            </h3>
            <p className="contact-links">
              <i className="bi bi-envelope"></i> prasanthjg56@gmail.com
            </p>
            <p className="contact-links">
              <i className="bi bi-telephone-fill"></i> +91 6382608201
            </p>
            <p className="contact-links">
              <i className="bi bi-geo-alt"></i> 102/2, 3rd Cross Rd, Industrial
              Area, Stage 2, BTM Layout, Bengaluru, Karnataka 560076
            </p>
          </div>

          <div className="contact-message">
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                aria-label="Name"
                placeholder="Name*"
                required
                value={formValues.name}
                onChange={onChange}
                className="form-input"
              />
              <input
                type="email"
                name="email"
                aria-label="Email"
                placeholder="Email*"
                required
                value={formValues.email}
                onChange={onChange}
                className="form-input"
              />
              <input
                type="text"
                name="companyName"
                aria-label="Company Name"
                placeholder="Company Name*"
                required
                value={formValues.companyName}
                onChange={onChange}
                className="form-input"
              />
              <input
                type="text"
                name="companyLocation"
                aria-label="Company Location"
                placeholder="Company Location*"
                required
                value={formValues.companyLocation}
                onChange={onChange}
                className="form-input"
              />
              <textarea
                name="message"
                aria-label="Message"
                placeholder="Message*"
                required
                value={formValues.message}
                onChange={onChange}
                className="form-textarea"
              ></textarea>
              <button id="submit" type="submit" className="form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
