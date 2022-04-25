import React, { Component } from 'react';
import './Profile.css';
import EditProfile from '../../components/EditProfile';
import { Link, NavLink } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="profile-container">
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                           <div className= "profile-stats">
                                DOB: {this.props.currentUser.birthday}<br/>
                                Skills: {this.props.currentUser.skillsList}<br/>
                                Location: {this.props.currentUser.stateLocated}<br/>
                                Occupation: {this.props.currentUser.career}<br/>
                                <br></br>
                                Biography: <br></br>{this.props.currentUser.bio}<br/>
                            </div>
                        </div>
                        
                        <button className = "edit-button">
                            <NavLink to="/editProfile" className = "edit-words">Edit</NavLink>
                        </button>
                    </div>
                    
                    
                </div>  
                
            </div>
        );
    }
}

export default Profile