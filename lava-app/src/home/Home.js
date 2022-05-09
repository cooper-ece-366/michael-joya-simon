import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Home.css';
import '../home/lavatestgif.gif'

class Home extends Component {
    render() {
        return (
            <div className="about-container">
            <div className="home-container">
                <div className = "lavag">
                <div className="home-title-container">
                        <div className="lava-title">Join Lava
                        </div>
                        <div className = "home-titles">
                        <div className="home-title1">Where  
                        </div>
                        <div className="home-title2">Knowledge  
                        </div>
                        <div className="home-title3">Flows 
                        </div>
                        <div>&nbsp;<div>&nbsp;&nbsp;</div>&nbsp;</div>
                        <NavLink className = "explore-button" to= "/about">Explore Lava</NavLink>
                        </div> 
                        
                        <div className = "home-desc">
                        <p>Find your community <br></br>
                        Found your own</p>
                        <button className = "check-button">Log In | Sign Up Above</button>                   
                        </div>
                        <div className="bottom-text">Image Credit to Dave Whyte </div>
                    </div> 
                </div>
                <div className="container">
                    <div className = "lavagif">
                    {/*<div className="graf-bg-container">
                        <div className="graf-layout">
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                            <div className="graf-circle"></div>
                        </div> 
                    </div> */}
                    </div>    
                </div> 
            </div>
        </div>
        )
    }
}

export default Home;