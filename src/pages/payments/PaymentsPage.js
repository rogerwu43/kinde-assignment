import React from 'react';

import '../pages.css';
import './PaymentsPage.css';


function PaymentsPage() {
    return (
        <div className="payments-page pages-medium-page">
            <h1>Payments</h1>
            <div className="subtitle">
                Add ways to receive payments. <a href="/faq">Learn&nbsp;more</a>
            </div>

            <div className="pages-body-container">
                <h3>Payment providers</h3>

                <div className="payment-list">
                    <div className="payment-container">
                        <div className="payment-text-container">
                            <img className="stripe-logo" src="assets/images/stripe-logo.png" alt="Stripe Logo" />
                            <div className="text">
                                Connect Stripe to let customers pay with all major credit cards and Apple&nbsp;Pay
                            </div>
                        </div>
                        <div className="connect-button-container">
                            <button>Connect</button>
                        </div>
                    </div>
                    <div className="payment-container">
                    <div className="payment-text-container">
                            <img className="paypal-logo" src="assets/images/paypal-logo.png" alt="Paypal Logo" />
                            <div className="text">
                                Connect PayPal&nbsp;Business to let customers pay with a PayPal or Venmo account
                            </div>
                        </div>
                        <div className="connect-button-container">
                            <button>Connect</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default PaymentsPage;
