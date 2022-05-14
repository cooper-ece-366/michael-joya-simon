//Joya Debi & Michael Bentivegna

//Overall friends page that will showcase the incoming, outgoing, and confirmed friends
import React, { Component,} from 'react';
import './Friends.css';
import FriendList from './FriendList';
import Outgoing from './Outgoing';
import Incoming from "./Incoming";
import { getFriends, getFriendAddressee, getFriendRequests } from '../util/APIUtils';
import '../fonts/font.css';


var test = []
class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            frienddata: [], 
            requestdata: [], 
            addresseedata: [], 
            isRequests: true,
        };
        this.toggleIsRequests = this.toggleIsRequests.bind(this);
    }

    
    //Switch between incoming and outgoing (Joya Debi)
    toggleIsRequests() {
        this.setState({isRequests: !this.state.isRequests});
    }

    //Get friends data on load in (Michael Bentivegna)
    async componentDidMount(e) {
            await getFriends().then((response) => {
                console.log(this.setState({frienddata: response}))
                })

            await getFriendRequests().then((response) => {
                console.log(this.setState({requestdata: response}))
                })

            await getFriendAddressee().then((response) => {
                console.log(this.setState({addresseedata: response}))
                })

    }

    //Styling and positions (Joya Debi)
    render() {
        return (<div className = "list-total" style= {{height:"100vh"}}>
                <div className="row" style={{height:"100vh"}}>
                    <div className="column-left">
                        <h1 className="Study-Buddies">
                            Study Buddies
                        </h1>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div> 
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div className = "buddy-list">
                            {this.state.frienddata.map((item)=>{
                                return(<FriendList {...item} key={item.id}/>)
                            })}
                        </div>
                    </div>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <div className="column-right">
                        <h1 className = "Requests">
                            Requests
                        </h1>
                        <div className="dropdown">
                            <button onClick={() => {this.setState({isRequests: true})}} className={`dropbtn ${this.state.isRequests ? "active" : ""}`}>Incoming</button>
                            <button onClick={() => {this.setState({isRequests: false})}} className={`dropbtn ${this.state.isRequests ? "" : "active"}`}>Outgoing</button>
                        </div>
                        &nbsp;
                        <div className = "request-list">
                        {!this.state.isRequests ?
                        <div>
                            {this.state.requestdata.map((item   )=>{
                                return(<Outgoing {...item} key={item.id}/>)
                            })}
                        </div>:
                            <div>
                                {this.state.addresseedata.map((item) => {
                                    return (<Incoming {...item} key={item.id}/>)
                                })}
                            </div>}
                        </div>    
                    </div>
                </div>
                </div>
        )
    }
}
export default Friends;
