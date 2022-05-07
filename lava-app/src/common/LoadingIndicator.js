import React from 'react';
import './LoadingIndicator.css';
import '../home/elevategif.gif'

export default function LoadingIndicator(props) {
    return (
        <div className="loading-container" style={{height:"100vh"}}>
            <div className = "load-text">Credit to Dan Whyte</div>
            <div className="loading-indicator">
                
                {/*<div class = "particle"></div>
                <div class = "particle leftSpin"></div>
                <div class = "particle"></div>
                <div class = "particle rightSpin"></div>
                <div class = "particle"></div>
                <div class = "particle leftSpin"></div>
                <div class = "particle"></div>
                <div class = "particle rightSpin"></div>
                <div class = "particle"></div>*/}
            </div>
        </div>
    );
}