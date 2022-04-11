//Joya
import React, { Component,} from 'react';
import './Friends.css';
import FriendList from './FriendList';
import frienddata from "./frienddata";
import RequestList from './requestlist';
import requestdata from "./requestdata";



class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            frienddata, requestdata,
        };
    }
    render() {
        return (
                <div class="row">
                    <div class="column">
                        <h1 className="Study Buddies">
                            Study Buddies
                        </h1>
                        <div>
                            {this.state.frienddata.map((item)=>{
                                return(<FriendList {...item} key={item.id}/>)
                            })}

                        </div>
                    </div>
                    <div class="column">
                        <h1 className= "Requests">
                            Requests
                        </h1>
                        <div>
                            {this.state.requestdata.map((item   )=>{
                                return(<RequestList {...item} key={item.id}/>)
                            })}
                        </div>

                    </div>
                </div>
        )
    }
}

export default Friends;


//make open boolean in state
//apply that to div title to change when clicked
//make so div data shown only shjown when open boolen true