import React from 'react';
import './SentList.css';

const SentList=({id, name, interests, img, msg})=>{
    return(
        <div>
            <section className="Sent">
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
export default SentList;