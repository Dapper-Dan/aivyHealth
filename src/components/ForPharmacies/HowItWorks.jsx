import React from "react";
import howItWorksGraphic from "../../images/howItWorksGraphic.svg";
import howItWorksGraphicMobile from "../../images/verticleWave.svg";
import statsGraphic from "../../images/stats.svg";

function HowItWorks() {
  return (
    <section className="howItWorks forPharmacies flex-column">
      <img src={howItWorksGraphic} className="d-none d-md-block" alt="" />
      <img src={howItWorksGraphicMobile} className="d-block d-md-none" alt="" />
      <img src={statsGraphic} className="d-block d-md-none" alt="" />
    </section>
  );
}

export default HowItWorks;
