import React, { Component,} from 'react';
import './about.css';
import michael2 from '../home/michael2.png';
import simon2 from '../home/simon2.jpg';
import joya2 from '../home/joya2.jpg';

class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };

    }

    render() {
        return (<div className="about">
        <div className="desc">
            <div className = "desc-back">
            <div className="about-title-container">
                    <div className="about-title">
                    </div>
                    <div className = "about-titles">
                    </div> 
                    <div class="heading">
                    <div>
                    <p class="slide-up"><span class="green">AT LAVA,</span></p>
                    </div>
                    <div>
                    <p class="slide-up">Elevate your learning</p>
                    </div>
                    <div>
                    <p class="slide-up">Engage your community</p>
                    </div>
                    <div>
                    <p class="slide-up">Expand your reach</p>
                    </div>
                    <div>
                    <div>&nbsp;</div>
                    <p class="slide-up"><span class="team">
                    Meet the team</span></p>
                    </div>
                    </div>
                    <div className= "creators">
                        <div className= "michael">
                        
                        </div>
                        <div className= "simon">
                            
                        </div>
                        <div className= "joya">
                            
                        </div>
                        <div className="legend">
                            <div className="m-text">
                            <img src= {michael2}>
                            </img>&nbsp;&nbsp;&nbsp;Michael Bentivegna</div>
                            <div className="s-text">
                            <img src= {simon2}>
                            </img>&nbsp;&nbsp;&nbsp;Simon Yoon</div>
                            <div className="j-text">
                            <img src= {joya2}>
                            </img>&nbsp;&nbsp;&nbsp;Joya Debi</div>
                        </div>
                    </div>

                    
                    <div className = "alt-desc">
                    <div className="bottom-text2">Image Credit to Dave Whyte </div>
                    </div>
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
    </div>)
    }
}
export default About;