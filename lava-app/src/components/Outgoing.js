import React from 'react';
import './Outgoing.css';

const Outgoing=({id, name, skillsList, imageUrl})=>{
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
            </section>
        </div>

    )
}
export default Outgoing;