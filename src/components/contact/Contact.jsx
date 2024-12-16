import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";
import contactData from "../../data/contact.json";

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
            {contactData.contactDetails.map((detail) => (
              <p key={detail.id} className="contact-links">
                <i className={detail.icon}></i> {detail.label}
              </p>
            ))}
          </div>

          <div className="contact-message">
            <form onSubmit={onSubmit}>
              {contactData.formFields.map((field) =>
                field.type === "textarea" ? (
                  <textarea
                    key={field.id}
                    name={field.name}
                    aria-label={field.ariaLabel}
                    placeholder={field.placeholder}
                    required
                    value={formValues[field.name]}
                    onChange={onChange}
                    className="form-textarea"
                  ></textarea>
                ) : (
                  <input
                    key={field.id}
                    type={field.type}
                    name={field.name}
                    aria-label={field.ariaLabel}
                    placeholder={field.placeholder}
                    required
                    value={formValues[field.name]}
                    onChange={onChange}
                    className="form-input"
                  />
                )
              )}
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
