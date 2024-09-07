/**
 * This code was generated by Builder.io.
 */
import React from "react";
import expandCross from "../../images/expand-cross.svg";


function HowItWorks() {
  const steps = [
    {
      title: "Choose your infusion"
    },
    {
      title: "Schedule & track"
    },
    {
      title: "Receive patient-centered care"
    },
  ];

  return (
    <section className="howItWorks">
      <span className="howItWorksTitle">
        How <h1>AivyHealth</h1> works
      </span>
      <p className="howItWorksDescription">
        At Aivy Health, we deliver on-demand infusion therapy tailored to your
        needs. Whether you're managing a chronic condition with a specialty
        infusion prescribed by your physician or seeking a wellness boost, our
        service brings personalized care directly to you, wherever you are.
      </p>
      {steps.map((step, index) => (
        <div key={index} className="step">
          <div className="stepInfo">
            <h3 className="stepTitle">
              Step {index + 1}: {step.title}
            </h3>
            <img
              src={expandCross}
              alt=""
              className="stepIcon"
            />
          </div>
        </div>
      ))}
    </section>
  );
}

export default HowItWorks;
