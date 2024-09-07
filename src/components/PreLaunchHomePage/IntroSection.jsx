/**
 * This code was generated by Builder.io.
 */
import React from "react";
import introOnDemand from "../../images/intro-on-demand.svg"

function IntroSection() {
  return (
    <section className="introSection">
      <div className="introContent">
        <h1 className="introTitle">
          On-demand infusions for a healthier you
        </h1>
        <p className="introDescription">
          We integrate wellness and specialty infusions into one service. Our
          approach increases access to necessary treatments, significantly
          reduces patient wait times, and offers a more efficient,
          patient-centric solution.
        </p>
        <div className="introCta">
          <button className="joinWaitlistButton">Join the waitlist</button>
          <button className="treatmentButton">
            What we treat
          </button>
        </div>
      </div>
      <img
        src={introOnDemand}
        alt="Infusion therapy illustration"
        className="introImage"
      />
    </section>
  );
}

export default IntroSection;
