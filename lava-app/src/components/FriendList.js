import React from 'react';
import './FriendList.css';

const FriendList=({id, name, skillsList, imageUrl})=>{
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
            </section>
        </div>
    )
}
export default FriendList;