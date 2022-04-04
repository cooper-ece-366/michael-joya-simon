import React, { Component } from 'react';
import './EditProfile.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import {options, stateNames} from '../constants/skillsList'
import Alert from 'react-s-alert';
import { NavLink } from 'react-router-dom';
import moment from 'moment'

//Michael Bentivegna

let states = []

class EditProfile extends Component {
    constructor(props) {
        super(props);
        
        
        stateNames.forEach(function(element) {  
        states.push({ label:element, value: element })})
        //Change these to an API get request of traits from current user at the start (like how its done with name)
        this.state = {
            name: this.props.currentUser.name,
            birthday: "2000-01-01",
            skills: '', 
            bio: '',
            state: '',
            career: '',
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.changeHandlerBirthday = this.changeHandlerBirthday.bind(this);
        this.changeHandlerSkills = this.changeHandlerSkills.bind(this);
        this.changeHandlerState = this.changeHandlerState.bind(this);
        this.submit = this.submit.bind(this);
    }

    //Change handler for regular inputs
    changeHandler(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }

    //Change handler for birthday inputs
    //Makes birthday a string instead of a moment
    changeHandlerBirthday(date) {
        this.setState(
            {
                birthday: date.format("yyyy-MM-DD")
            }
        );
    }

    //Change handler for skills multiselect
    changeHandlerSkills(selectedOptions) {
        let result = selectedOptions.map(a => a.value);
        this.setState(
            {
                skills: result
            }
        );
    }

    changeHandlerState(selectedOption) {
        let result = selectedOption.value;
        this.setState(
            {
                state: result
            }
        );
    }

    //Submit button with alert
    submit() {
        console.log(this.state)
        //Make UPDATE request for Profile here

        Alert.success("You're changes have been saved!");
        
    }
    
    render() {
        return (
            <div className = "overall-content">
                <div className = "main-content">
                    <h1 className = "title">Edit Profile</h1>
                    <div className = "back-to-profile-container"><NavLink to="/profile" className = "back-text">Back to Profile</NavLink><br/><br/><br/><br/></div>
                    <div className = "wrapper">
                        <div className = "field-small"><h3>Name: </h3>
                            <input className = "name-input"
                                type="text" 
                                name="name"  
                                value={this.state.name}  
                                onChange={this.changeHandler} >
                            </input>
                        </div>

                        <div className = "field-small"><h3>Birthday:</h3>
                            <DatePicker className = "input-Date"
                                showYearDropdown
                                scrollableMonthYearDropdown
                                calendarContainer
                                name="birthday"
                                dateFormat="MM / DD / yyyy"
                                selected= { moment(this.state.birthday) }
                                onChange= { this.changeHandlerBirthday}
                                ></DatePicker>
                        </div>

                        <div className = "field-small"><h3>Career: </h3>
                            <input className = "career-input"
                                type="text" 
                                name="career"  
                                value={this.state.career}  
                                onChange={this.changeHandler} >
                            </input>
                        </div>

                        <div className = "field-small"><h3>State Located:</h3>
                            <div className = "select-state"><Select options={states} onChange = {this.changeHandlerState}/></div>
                        </div> 
                    </div>

                    <div className = "field"><h3>Skills:</h3>
                        <div className = "select"><Select options={options} isMulti onChange = {this.changeHandlerSkills}/></div>
                    </div> 

                    <div className = "field"><h3>Biography:</h3>
                        <textarea className = "textareas"
                            name="bio"  
                            onChange={this.changeHandler} >
                        </textarea>

                    </div>
                    <div className = "hold-button">
                        <button className = "sub"
                            onClick= {this.submit}>
                            Save Changes
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditProfile;