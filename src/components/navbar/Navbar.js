import React from 'react';

import './Navbar.css';


function Navbar() {
    return (
        <div className="navbar">
            <a href="https://www.kinde.com">
                <img className="home-logo" src="assets/images/kinde-logo.png" alt="Kinde Logo" />
            </a>

            <a className="link" href="/payments">Payments</a>
            <a className="link" href="/faq">FAQ</a>
        </div>
    );
}


export default Navbar;
