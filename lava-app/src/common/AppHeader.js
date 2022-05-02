import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AppHeader.css';
import '../components/EditProfile.css';
import '../components/Card.css';
import '../components/FriendList.css';
import '../components/Friends.css';
import '../components/Incoming.css';
import '../components/Outgoing.css';
import './LavaLogo.css';
import './LavaLogo.js';

class AppHeader extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="container">
                    <div className="app-branding">
                        <Link to="/" className="app-title">Lava</Link>
                    </div>
                    <div className="app-options">
                        <nav className="app-nav">
                                { this.props.authenticated ? (
                                    <ul>
                                        <li>
                                            <NavLink to= "/calendar">Calendar</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to= "/studybuddies">Study Buddies</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/find">Find</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/profile">Profile</NavLink>
                                        </li>
                                        <li>
                                            <a onClick={this.props.onLogout}>Logout</a>
                                        </li>
                                    </ul>
                                ): (
                                    <ul>
                                        <li>
                                            <NavLink to="/login">Login</NavLink>        
                                        </li>
                                        <li>
                                            <NavLink to="/signup">Signup</NavLink>        
                                        </li>
                                    </ul>
                                )}
                                <div class ="animation start-home"></div>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default AppHeader;