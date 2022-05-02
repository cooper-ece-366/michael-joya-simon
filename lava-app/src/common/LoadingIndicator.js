import React from 'react';
import './LoadingIndicator.css';

export default function LoadingIndicator(props) {
    return (
        <body>
            <div className = "load-text">Enter Lava</div>
            <div className="loading-indicator">
                <div class = "particle"></div>
                <div class = "particle leftSpin"></div>
                <div class = "particle"></div>
                <div class = "particle rightSpin"></div>
                <div class = "particle"></div>
                <div class = "particle leftSpin"></div>
                <div class = "particle"></div>
                <div class = "particle rightSpin"></div>
                <div class = "particle"></div>
            </div>
        </body>
    );
}