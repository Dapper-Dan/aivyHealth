import React from "react";
import whatWeDo from "../../images/pharmWhatWeDo.svg";
import checkMark from "../../images/blueCheck.svg";
import pharmTalking from "../../images/pharm-talking.svg";

function FeatureHighlights() {
  const features = [
    {
      title: "Always there when you need us",
      description:
        "We manage your staffing needs, ensuring Registered Nurse availability even on evenings and weekends."
    },
    {
      title: "Top-tier talent, hassle free",
      description:
        "Our team handles recruitment, onboarding, and training of top-talent RNs, so you can focus on patient care."
    },
    {
      title: "Paperwork is our superpower",
      description:
        "We take care of employer taxes, insurance, and employee benefits, reducing your administrative workload."
    }
  ];

  const checklist = [
    {
      label: 'Same-day infusion completion, guaranteed'
    },
    {
      label: 'Documentation returned within 24 hours'
    },
    {
      label: 'Dedicated support administrators'
    },
    {
      label: 'Exceptional patient retention and satisfaction'
    },
    {
      label: 'Reduce operational costs'
    },
    {
      label: 'Scalable Solutions'
    },
    {
      label: 'Compliance and quality assurance'
    },
    {
      label: 'Technology-driven approach '
    }
  ];

  return (
    <section className="featureHighlights forPharmacies">
      <h2 className="featureTitle">We help pharmacies increase profitability</h2>
      <p className="featureDescription">
        Delays in staffing, chart bounce back, late payments, and operational burdens are a thing of the past. Save time and increase profits with Aivy Health.
      </p>
      <div className="featureGrid">
        {features.map((feature, index) => (
          <div key={index} className="featureCard">
            <h3 className="featureCardTitle">{feature.title}</h3>
            <p className="featureCardDescription">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
      <div className="whatWeDo">
        <img className="whatWeDoImg d-block d-md-none" src={pharmTalking} alt="" />
        <div className="checkListContainer">
          <h2>What we do for you</h2>
          <ul>
            {checklist.map((item, index) => (
              <li key={index} className="checkItem">
                <img src={checkMark} alt="" />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <img className="whatWeDoImg" src={whatWeDo} alt="" />
      </div>
    </section>
  );
}

export default FeatureHighlights;
