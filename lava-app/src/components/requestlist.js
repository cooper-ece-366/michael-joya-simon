import React from 'react';
import './requestlist.css';

const RequestList=({id, name, interests, img, msg})=>{
    return(
        <div>
            <section className="request">
                <div className="imagebox">
                    <img src={`${img}/${id}`} alt={name} className="image"/>
                </div>
                <div className="imagetext">
                    <h1 className="name">{name}</h1>
                    <div>{interests}</div>
                    <div>{msg}</div>
                </div>
            </section>
        </div>

    )
}
export default RequestList;