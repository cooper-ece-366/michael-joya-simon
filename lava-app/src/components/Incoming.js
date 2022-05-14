//Joya Debi

//Incoming friend requests each on their own card for friends page

import React from 'react';
import './Incoming.css';
import { postAccept, postDelete } from '../util/APIUtils';

const Incoming = ({id, name, skillsList, imageUrl})=>{

    //Accept friend - send api request
    function makePost(){
        console.log("test");
        postAccept(id);
        window.location.reload();
    }

    //Decline friend - send api request
    function makePostDecline() {
        console.log("test");
        postDelete(id);
        window.location.reload();
    }

    return(
        <div>
            <section className="Sent">
                <div className="imagebox">
                    <img src={imageUrl} alt={name} className="image"/>
                </div>
                <div className="imagetext">
                    <h1 className="name">{name}</h1>
                    <div>{skillsList}</div>
                </div>
                <button onClick = {makePost} className = "accept-button">Accept</button>
                <button onClick = {makePostDecline} className = "decline-button">Decline</button>
            </section>
        </div>

    )
}
export default Incoming;