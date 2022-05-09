import React, { Component } from 'react';
import './Profile.css';
import EditProfile from '../../components/EditProfile';
import { Link, NavLink } from 'react-router-dom';

class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        
    }

    nameArr = this.props.currentUser.skillsList.split(',');
    test = new Date(this.props.currentUser.birthday).toDateString()


    render() {
        return (
            <div className="profile-container" style={{height:"100vh"}}>
                <div className="profile-container-inner">
                    <div className="profile-info">
                        <div className = "left-div-profile">
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
                            <h2 className = "name-in-profile">{this.props.currentUser.name}</h2>
                            <p className="profile-email">{this.props.currentUser.email}</p>
                        </div>
                        <div className = "right-div-profile">
                            <div className="profile-name"> 
                                <div className= "profile-stats">
                                    <div className = "indiv-stat-header">Birthday</div>
                                    <div className = "profile-indiv-stat">{this.test}<br/></div>
                                    <div className = "indiv-stat-header">Skills</div>
                                    <div className = "profile-skills-list">{this.nameArr.map((val) => {
                                        return(<div className = "skills-text">{val}</div>)
                                    })}
                                    <br/></div>
                                    <div className = "indiv-stat-header">Career</div>
                                    <div className = "profile-indiv-stat">{this.props.currentUser.career}<br/></div>
                                    <div className = "indiv-stat-header">State</div>
                                    <div className = "profile-indiv-stat">{this.props.currentUser.stateLocated}<br/></div>
                                <div className = "indiv-stat-header">About Me</div>
                                <div>{this.props.currentUser.bio}</div><br/>
                                </div>
                            </div>
                        

                                <div className = "edit-container"><NavLink to="/editProfile" className = "edit-words">Edit</NavLink></div>
                        </div>
                    </div>
                    
                    
                </div>  
                
            </div>
        );
    }
}

export default Profile