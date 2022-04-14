import React from "react";

import ProviderCard from "./components/providerCard/ProviderCard";

import "../pages.css";
import "./PaymentsPage.css";

function PaymentsPage() {
  const providers = [
    {
      name: "Stripe",
      logo: "assets/images/stripe-logo.png",
      description:
        "Connect Stripe to let customers pay with all major credit cards and Apple Pay",
    },
    {
      name: "Paypal",
      logo: "assets/images/paypal-logo.png",
      description:
        "Connect PayPal Business to let customers pay with a PayPal or Venmo account",
    },
  ];

  return (
    <div className="payments-page pages-medium-page">
      <h1>Payments</h1>
      <p className="subtitle">
        Add ways to receive payments. <a href="/faq">Learn&nbsp;more</a>
      </p>

      <div className="pages-body-container">
        <h2>Payment providers</h2>

        <ul className="provider-list">
          {providers.map((provider) => (
            <ProviderCard
              key={provider.name}
              name={provider.name}
              logo={provider.logo}
              description={provider.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PaymentsPage;
