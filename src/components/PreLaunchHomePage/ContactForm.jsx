/**
 * This code was generated by Builder.io.
 */
import React from "react";


function ContactForm() {
  return (
    <section className="contactSection">
      <div className="contactInfo">
        <h2 className="contactTitle">Still have questions?</h2>
        <p className="contactDescription">
          Contact us to explore more ways we can help you achieve health.
        </p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa27cbb0fc23678587417a6f38364ec1f5c46d3fb717b177145cffe47f75b835?placeholderIfAbsent=true&apiKey=03b8c186f0974d22b1cfe3aef28c106c"
          alt="Contact illustration"
          className="contactImage"
        />
      </div>
      <form className="contactForm">
        <div className="formRow">
          <input
            type="text"
            placeholder="First"
            aria-label="First Name"
            className="formInput"
          />
          <input
            type="text"
            placeholder="Last"
            aria-label="Last Name"
            className="formInput"
          />
        </div>
        <div className="formRow">
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="formInput"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            aria-label="Phone Number"
            className="formInput"
          />
        </div>
        <div className="formRow">
          <input
            type="text"
            placeholder="State"
            aria-label="State"
            className="formInput"
          />
          <input
            type="text"
            placeholder="Insurance Provider"
            aria-label="Insurance Provider"
            className="formInput"
          />
        </div>
        <div className="formRow">
          <input
            type="text"
            placeholder="Subject"
            aria-label="Subject"
            className="formInput"
          />
        </div>
        <div className="formRow">
          <textarea
            placeholder="How can we help you?"
            aria-label="How can we help you?"
            className="formTextarea"
          ></textarea>
        </div>
        <button type="submit" className="submitButton">
          Submit
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
