import React from "react";

function FeatureHighlights() {
  const features = [
    {
      title: "Every patient deserves safe and accessible care",
      description:
        "We ensure high-quality, on-demand infusions that prioritize patient safety and convenience in every step."
    },
    {
      title: "Tech forward care, people first approach",
      description:
        "Book your appointments, message your infusion nurse, get support from our nurse navigator and more—all in one secure place."
    },
    {
      title: "Partnerships with providers, pharmacies, and employers",
      description:
        "Whether its your employer or your provider, we strive to integrate our services into your care plan so you can get affordable quality care."
    },
    {
      title: "On-demand Patient Access",
      description:
        "Difficulty booking appointments, commute time, uncomfortable settings, and high nurse to patient ratios are a thing of the past. With Aivy Health, you are back in control of your care."
    },
    {
      title: "Skilled Nurses",
      description:
        "Our nurses are continually trained on the latest policies, procedures, and evidence based practice in infusion administration. We employ experts in infusion care."
    },
    {
      title: "Support & Guidance",
      description:
        "From start to finish, we offer continuous support and guidance to help you navigate your infusion therapy with confidence."
    },
  ];

  return (
    <section className="featureHighlights">
      <h2 className="featureTitle">Meeting you where you are</h2>
      <p className="featureDescription">
        Literally, and figuratively. We surround families and patients
        throughout their infusion therapy journey with seamless support every
        step of the way.
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
    </section>
  );
}

export default FeatureHighlights;
