import React from "react";

function FAQSection() {
  const faqs1 = [
    {
      question:
        "What is the difference between a wellness and specialty infusion?",
      answer: "Specialty infusion is for patients with specific medical needs, offering cost savings and strict medical oversight. Wellness infusions focuses on preventative care for overall well-being and longevity. Both deliver significant results, with the choice depending on patient needs and budget.",
    },
    {
      question: "How do I schedule a specialty infusion?",
      answer: "Our specialty pharmacy partners will notify us when your specialty infusion has been approved. Once approved, your established account is loaded with your infusion credit. When you’ve confirmed that all of your medications and equipment have been received from the pharmacy, log into your account, add your infusion to your Plan of Care, book your appointment, and an Aivy Health nurse will be assigned to you.",
    },
    {
      question: "How do I schedule a wellness or urgent care infusion?",
      answer: "Add your desired wellness or symptom management infusion to your Plan of Care. Upgrade our offerings with Add-Ons to further tailor the infusion to your health needs. Once decided, check out by booking your appointment. Once our provider contacts clears you with a Good Faith Exam (GFE), an Aivy Health nurse will be assigned to you. ",
    },
    {
      question:
        "Can I get both a specialty and a wellness infusion during the same appointment?",
      answer: "Yes, this is the ideal Aivy Health way! Our Providers will perform a Good Faith Exam (GFE) separate from your Primary Doctor to determine if you’re eligible for a wellness infusion. The majority of patients are. Most common wellness infusions paired with specialty infusions are a Myer’s Cocktail or Immune Infusion. Our patients go a step further and purchase a membership for additional savings.",
    }
  ];

  const faqs2 = [
    {
      question: "Are infusions covered by insurance?",
      answer: "All wellness and urgent care infusion patients will be provided a superbill, a detailed receipt given after receipt of service. It includes information about the service, the diagnosis code (ICD-10), the procedure code (CPT), and the cost. Patients can submit this document to their insurance provider to seek partial or full reimbursement, depending on their insurance plan. Specialty infusions are covered by insurance through partnership with your specialty pharmacy.",
    },
    {
      question: "How do I prepare for my infusion?",
      answer: "Stay hydrated before your infusion and wear loose clothing for comfort. Let us know if you have any specific request prior to your appointment (e.g. female nurse only, dog-friendly nurses, etc). If you're feeling unwell, and are receiving biologics, it's best to reschedule since it can weaken your immune response. Instead, consider our Immune or Immune Plus infusion to recover from your illness before rescheduling your next specialty infusion.",
    },
    {
      question:
        "I am currently getting infusions at an ambulatory clinic, infusion center, or Doctor’s Office. How do I switch to Aivy Health?",
      answer: "A doctor must refer you to Aivy Health to receive home infusion therapy. We will then review insurance coverage and confirm your information to verify your benefits and obtain insurance authorization for your treatment. Once obtained, we will review insurance benefits with you and discuss copays that may be your responsibility. Your infusion credit will then be loaded to your account for you to order your infusion on-demand. Aivy Health will bill your insurance and assist you in managing their financial responsibility securely online.",
    },
    {
      question: "Where can I have my appointment?",
      answer: "Your infusion appointment can be anywhere you feel most safe and comfortable. We have provided infusion care across the spectrum - home, hotel, work, and more.",
    },
    {
      question: "How do I pay for my bill?",
      answer: "Wellness infusion are out of pocket therefore your payment method will be charged a holding fee. At completion of the appointment, your payment will then be fully submitted. A superbill will be provided should you want to submit to your insurance for partial or full reimbursement. For specialty infusion, your copay will be to your specialty pharmacy therefore no payment to Aivy Health is needed unless you are supplementing your care with a wellness infusion.",
    }
  ];

  return (
    <section className="faqSection" id="faqSection">
      <h2 className="faqTitle">Frequently Asked Questions</h2>
      <div className="faqGrid">
        <div className="col-1">
          {faqs1.map((faq, index) => (
            <details key={index} className="faqItem">
              <summary className="faqQuestion">{faq.question}</summary>
              <p className="faqAnswer">{faq.answer}</p>
            </details>
          ))}
        </div>
        <div className="col-2">
          {faqs2.map((faq, index) => (
            <details key={index} className="faqItem">
              <summary className="faqQuestion">{faq.question}</summary>
              <p className="faqAnswer">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
