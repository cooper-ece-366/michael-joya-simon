import React from 'react';
import './Outgoing.css';
import friendRemove from './FriendList.js';
import {postDelete} from '../util/APIUtils.js'

const Outgoing=({id, name, skillsList, imageUrl})=>{

    function friendRemove() {
        console.log("test");
        postDelete(id);
        window.location.reload();
    }

    return(
        <div>
            <section className="request">
                <div className="imagebox">
                    <img src={imageUrl} alt={name} className="image"/>
                </div>
                <div className="imagetext">
                    <h1 className="name">{name}</h1>
                    <div>{skillsList}</div>
                </div>
                <button onClick = {friendRemove} className = "remove-button">Remove</button>
            </section>
        </div>

    )
}
export default Outgoing;