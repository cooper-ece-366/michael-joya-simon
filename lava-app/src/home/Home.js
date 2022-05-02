import React, { Component } from 'react';
import './Home.css';
import '../img/lavagif.gif'

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="container">
                    <div className = "lavagif">
                    <div className="graf-bg-container">
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
                    </div>
                    </div>
                    <div className="home-title-container">
                        <div className="home-title">Where Knowledge Flows 
                        </div> 
                    </div>     
                </div>
            </div>
        )
    }
}

export default Home;