import React from "react";
import aivyTextLogo from "../../images/how-it-works-text-logo.svg";


function HowItWorks() {
  const steps = [
    {
      title: "Choose your infusion",
      answer: "Select the infusion therapy that best fits your needs, whether it's a wellness infusion or a specialty infusion prescribed by your physician and add it to your Plan Of Care."
    },
    {
      title: "Schedule & track",
      answer: "Book your appointment and track your nurse in real-time as they head to your location, bringing personalized care directly to you."
    },
    {
      title: "Receive patient-centered care",
      answer: "Enjoy the ease and comfort of receiving your infusion at a place of your choice, knowing you're in expert hands."
    },
  ];

  return (
    <section className="howItWorks">
      <span className="howItWorksTitle">
        How <img
          src={aivyTextLogo}
          alt="Aivy Health"
          className="logo"
        /> works
      </span>
      <p className="howItWorksDescription">
        At Aivy Health, we deliver on-demand infusion therapy tailored to your
        needs. Whether you're managing a chronic condition with a specialty
        infusion prescribed by your physician or seeking a wellness boost, our
        service brings personalized care directly to you, wherever you are.
      </p>
      {steps.map((step, index) => (
        <details key={index} className="step">
          <summary className="faqQuestion">
            <h3 className="stepTitle">
              Step {index + 1}: {step.title}
            </h3>
          </summary>
          <p className="faqAnswer">{step.answer}</p>
        </details>
      ))}
    </section>
  );
}

export default HowItWorks;
