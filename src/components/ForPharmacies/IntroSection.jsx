/**
 * This code was generated by Builder.io.
 */
import React from "react";
import forPatientsImg from "../../images/forPatientsIntroImg.svg"

function IntroSection() {
  return (
    <section className="introSection">
      <div className="introContent">
        <h1 className="introTitle">
          On-Demand Infusion Services for Better Patient Care
        </h1>
        <p className="introDescription">
          We handle your staffing and logistics to deliver timely, high-quality infusions directly to patients' homes.
        </p>
        <div className="introCta">
          <button className="joinWaitlistButton">Get Started Today</button>
        </div>
      </div>
      <img
        src={forPatientsImg}
        alt="Infusion therapy illustration"
        className="introImage"
      />
    </section>
  );
}

export default IntroSection;
