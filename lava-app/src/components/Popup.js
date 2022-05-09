import React, { Component,} from 'react';
import './Popup.css'
import { acceptMeeting, removeMeeting } from '../util/APIUtils';

const Popup = (props) => {

    function remove() {
        removeMeeting(props.message.id)
        window.location.reload(true);
    }

    function accept() {
        acceptMeeting(props.message.id)
        window.location.reload(true);
    }

if(props.message.status == 0)
{
    return (
        <div className = "overall-popup-outgoing">
            <button onClick={props.closeMe} className = "exit-but">Close</button>
            <h3 className = "meeting-person">Outgoing Meetup Request to: {props.message.title}</h3>
            <div className = "memo-popup">Memo</div>
            <div className = "memo-popup-value">{props.message.memo}</div>
            <button onClick = {remove} className = "remove-meet">Remove</button>
          
        </div>
      );
}
else if(props.message.status == 1) {
    return (<div className = "overall-popup-incoming">
            <button onClick={props.closeMe} className = "exit-but">Close</button>
            <h3 className = "meeting-person">Incoming Meeting Request from: {props.message.title}</h3>
            <div className = "memo-popup">Memo</div>
            <div className = "memo-popup-value">{props.message.memo}</div>
            <button onClick = {accept} className = "accept-meet">Accept</button>
            <button onClick = {remove} className = "remove-meet">Remove</button>
            
            </div>
        );
}
else  {
    return (<div className = "overall-popup">
            <button onClick={props.closeMe} className = "exit-but">Close</button>
            <h3 className = "meeting-person">Scheduled Meetup: {props.message.title}</h3>
            <div className = "memo-popup">Memo</div>
            <div className = "memo-popup-value">{props.message.memo}</div>
            <button onClick = {remove} className = "remove-meet">Remove</button>
            
            </div>
        );
}
    }

export default Popup;