//Joya
import React, { Component,} from 'react';
import './Friends.css';
import FriendList from './FriendList';
import frienddata from "./frienddata";
import RequestList from './requestlist';
import requestdata from "./requestdata";
import sentdata from "./sentdata";
import SentList from "./SentList";



class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            frienddata, requestdata, sentdata, isRequests: true,
        };
        this.toggleIsRequests = this.toggleIsRequests.bind(this);
    }

    toggleIsRequests() {
        this.setState({isRequests: !this.state.isRequests});
    }

    render() {
        return (
                <div className="row">
                    <div className="column">
                        <h1 className="Study Buddies">
                            Study Buddies
                        </h1>
                        <div>
                            {this.state.frienddata.map((item)=>{
                                return(<FriendList {...item} key={item.id}/>)
                            })}

                        </div>
                    </div>
                    <div className="column">
                        <div className="dropdown">
                            <button onClick={() => {this.setState({isRequests:true})}} className={`dropbtn ${this.state.isRequests ? "active" : ""}`}>Requests</button>
                            <button onClick={() => {this.setState({isRequests: false})}} className={`dropbtn ${this.state.isRequests ? "" : "active"}`}>Sent</button>
                        </div>
                        {this.state.isRequests ?
                        <div>
                            {this.state.requestdata.map((item   )=>{
                                return(<RequestList {...item} key={item.id}/>)
                            })}
                        </div>:
                            <div>
                                {this.state.sentdata.map((item) => {
                                    return (<SentList {...item} key={item.id}/>)
                                })}
                            </div>}
                    </div>
                </div>
        )
    }
}

export default Friends;


//make open boolean in state
//apply that to div title to change when clicked
//make so div data shown only shjown when open boolen true