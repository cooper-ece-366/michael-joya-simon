import React, { Component, useState } from 'react';
import './Friends.css';
import FriendList from './FriendList';
import frienddata from "./frienddata";


class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            frienddata,
            //const [value, setValue]= useState(frienddata)
        };
    }
    render() {
        return (
            <div>
                <div className="friendcontainer">
                    <h1 className="title">
                        Study Buddies
                    </h1>
                    <div>
                        {this.state.frienddata.map((item)=>{
                            return(<FriendList {...item} key={item.id}/>)
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