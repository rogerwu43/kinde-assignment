import React from 'react';

import './ProviderCard.css';


function ProviderCard(props) {
    return (
        <li className="provider-card">
            <div className="provider-card-text-container">
                <img className={ props.name.toLowerCase() + '-logo' } src={ props.logo } alt={ props.name + ' Logo' } />
                <p className="text">
                    { props.description }
                </p>
            </div>
            <div className="connect-button-container">
                <button>Connect</button>
            </div>
        </li>
    );
}


export default ProviderCard;
