import React from 'react';
import './FriendList.css';

const FriendList=({id, name, interests, img})=>{
    return(
        <div>
            <section className="friend">
                <div className="imagebox">
                    <img src={`${img}/${id}`} alt={name} className="image"/>
                </div>
                <div className="imagetext">
                    <h2 className="name">{name}</h2>
                    <p>{interests}</p>
                </div>
            </section>
        </div>
    )
}
export default FriendList;