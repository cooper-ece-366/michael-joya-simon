import React from 'react';
import { API_BASE_URL } from '../constants';
import './FriendList.css';
import {postDelete} from '../util/APIUtils.js'

const FriendList=({id, name, skillsList, imageUrl})=>{
    
    function friendRemove() {
        console.log("test");
        postDelete(id);
        window.location.reload();
    }
    
    return(
        <div>
            <section className="friend">
                <div className="imagebox">
                    <img src={imageUrl} alt={name} className="image"/>
                </div>
                <div className="imagetext">
                    <h2 className="name">{name}</h2>
                    <p>{skillsList}</p>
                </div>
                <button onClick = {friendRemove} className = "remove-button">Remove</button>
            </section>
        </div>
    )
}
export default FriendList;