import React, { Component,} from 'react';
import './Calendar.css';
import Select from 'react-select';
import { getFriends } from '../util/APIUtils';
import { options } from '../constants/skillsList';
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'
import 'react-clock/dist/Clock.css'
import { addMeeting, getMeetingOutgoing, getMeetingIncoming, getMeetingScheduled } from '../util/APIUtils'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Popup from './Popup';
import Alert from 'react-s-alert';

const localizer = BigCalendar.momentLocalizer(moment)


class CalendarComp extends Component { 
    constructor(props){
        super(props);
        this.state = {
            friends: [],
            meetings: [],
            outgoingMeetings: [],
            incomingMeetings: [],
            beginTime: (new Date()),
            endTime: (new Date()),
            idd: {},
            showPopup: false,
            requestMeet: {
                addresseeID: -1,
                startTime: (new Date()).toString(),
                endTime: (new Date()).toString(),
                memo: ""
            },
            eventFormat: []
        };
        this.getOptions = this.getOptions.bind(this)
        this.handleFriendChange = this.handleFriendChange.bind(this)
        this.handleMemoChange = this.handleMemoChange.bind(this)
        this.handleStartTimeChange = this.handleStartTimeChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this)
        this.getEvents = this.getEvents.bind(this)
        this.test = this.test.bind(this)
        this.openPopupHandler - this.openPopupHandler.bind(this)
        this.closePopupHandler - this.closePopupHandler.bind(this)
    }

    openPopupHandler = () => {
        this.setState({showPopup: true});
    }
  
    closePopupHandler = () => {
        this.setState({showPopup: false});
    }

    async componentDidMount(e) {
        await getFriends().then((response) => {
            console.log(this.setState({friends: response}))
            })

        await getMeetingOutgoing().then((response) => {
            console.log(this.setState({outgoingMeetings: response}))
            })

        await getMeetingIncoming().then((response) => {
            console.log(this.setState({incomingMeetings: response}))
            })

        await getMeetingScheduled().then((response) => {
            console.log(this.setState({meetings: response}))
            })

        
    }

    getOptions() {
        var options = []
        this.state.friends.forEach(function(element) {
            options.push({ label:element.name, value: element.id })
        });

        return options
    }

    getEvents() {
        var events = []
        this.state.outgoingMeetings.forEach(function(element){
            events.push({
                id: element.id,
                title: element.nameWith,
                start: (new Date(element.startTime)),
                end: (new Date(element.endTime)),
                status: 0,
                memo: element.memo
            })
        })
        this.state.incomingMeetings.forEach(function(element)
        {
            events.push({
                id: element.id,
                title: element.nameWith,
                start: (new Date(element.startTime)),
                end: (new Date(element.endTime)),
                status: 1,
                memo: element.memo
            })
        })
        this.state.meetings.forEach(function(element)
        {
            events.push({
                id: element.id,
                title: element.nameWith,
                start: (new Date(element.startTime)),
                end: (new Date(element.endTime)),
                status: 2,
                memo: element.memo
            })
        })

        return events;
    }

    handleFriendChange(selectedOption)
    {
        var requestMeet = {...this.state.requestMeet}
        requestMeet.addresseeID = selectedOption.value;
        this.setState({requestMeet});
    }

    handleMemoChange(event)
    {
        var requestMeet = {...this.state.requestMeet}
        requestMeet.memo = event.target.value;
        this.setState({requestMeet});
    }

    handleStartTimeChange(date)
    {
        this.setState(
            {
                beginTime: date
            }
        );
        if(date != null) {
            var requestMeet = {...this.state.requestMeet}
            requestMeet.startTime = date.toString()
            this.setState({requestMeet});
        }
        
    }

    handleEndTimeChange(date)
    {
        this.setState(
            {
                endTime: date
            }
        );
        if(date != null) {
            var requestMeet = {...this.state.requestMeet}
            requestMeet.endTime = date.toString()
            this.setState({requestMeet});
        }
        
    }

    test(event) {
        console.log(event)
        this.setState(
            {
                idd: event
            }
        );
        this.openPopupHandler()
    }

    async submitForm(){

        //Meet add api request goes here
        console.log(this.state)
        const meeting = Object.assign({}, this.state.requestMeet);
        if(this.state.requestMeet.addresseeID == -1)
        {
            Alert.error("Please Select a Friend for the Meetup")
        }
        else {
            addMeeting(meeting);
            Alert.success("Successfully Created Meeting")
            await this.sleep(1);
            window.location.reload(true);
        }
    }

    sleep(duration) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, duration * 1000)
        })
    }

    render() {
        
        let popup = null;
        if(this.state.showPopup) {
            popup = (<Popup message= {this.state.idd} closeMe={this.closePopupHandler}/>);
        } 

        return (<div className = "total-calendar" style={{height:"100vh"}}>
                    <div className = "form-calendar">
                        <div className = "cal-form-title">Create New Invite</div>
                        <div className = "grid-for-form">
                            <div className = "choose-friend">
                                <h4>Choose Friend:</h4>
                                <div className = "select-friend">
                                    <Select options = {this.getOptions()} onChange = {this.handleFriendChange}/>
                                </div>
                            </div>
                            <div className = "choose-start">
                                <h4>Select Start Time:</h4>
                                <div className = "select-start">
                                <DateTimePicker value = {this.state.beginTime} onChange = {this.handleStartTimeChange} className = "date-time-pick"/>
                                </div>
                            </div>
                            <div className = "choose-end">
                                <h4>Select End Time:</h4>
                                <div className = "select-end">
                                <DateTimePicker value = {this.state.endTime} onChange = {this.handleEndTimeChange}/>
                                </div>
                            </div>
                            <div className = "choose-memo">
                                <h4>Invitation Memo:</h4>
                                <input className = "cal-input"
                                    type="text" 
                                    name="name"  
                                    value={this.state.requestMeet.memo}  
                                    onChange={this.handleMemoChange} >
                                </input>
                            </div>
                            <div className = "submit-meeting-req">
                                <button onClick = {this.submitForm} className = "submit-meeting-req-button">Send Request</button>
                            </div>
                        </div> 
                        <div className = "pop-up">{popup}</div>

                    </div>
                    
                    <div className = "scheduler-calendar">
                    <div className = "cal-titles">Your Calendar</div>
                        <BigCalendar
                            startAccessor="start"
                            endAccessor="end"
                            localizer= {localizer}
                            events={this.getEvents()}
                            eventPropGetter = {(event, start, end, isSelected) => {
                                
                                let newStyle = {
                                  backgroundColor: "lightgrey",
                                  color: 'black',
                                  borderRadius: "0px",
                                  border: "none"
                                };

                                if(isSelected)
                                {
                                    this.test(event)
                                }
                          
                                if (event.status == 0){
                                    newStyle.backgroundColor = "orange"
                                }
                                else if (event.status == 1) {
                                    newStyle.backgroundColor = "#9854fd"
                                }
                                else {
                                    newStyle.backgroundColor = "lightgreen"
                                }
                                return {
                                    style:newStyle
                            }}}
                        />
                        
                    </div>
                    <div>
                        
                        </div>
                </div>
        )
    }
}
export default CalendarComp;