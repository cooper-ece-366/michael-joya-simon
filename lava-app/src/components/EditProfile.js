import React, { Component } from 'react';
import './EditProfile.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select';
import {options, stateNames} from '../constants/skillsList'
import Alert from 'react-s-alert';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import { updateCurrentUser } from '../util/APIUtils';

//Michael Bentivegna
        let states = []
        let skillsArray = []
        let skillsDefault = []

class EditProfile extends Component {
    constructor(props) {
        super(props);
        states = []
        skillsArray = []
        skillsDefault = []
        
        stateNames.forEach(function(element) {  
        states.push({ label:element, value: element })})

        this.state = {
            name: this.props.currentUser.name,
            birthday: this.props.currentUser.birthday,
            skillsList: this.props.currentUser.skillsList, 
            bio: this.props.currentUser.bio,
            stateLocated: this.props.currentUser.stateLocated,
            career: this.props.currentUser.career,
        }

        skillsArray = this.props.currentUser.skillsList.split(",")
        skillsArray.forEach(function(element) {
            skillsDefault.push({label: element, value: element.toLowerCase()})
        })
        

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
        let result = selectedOptions.map(a => a.label).toString()
        this.setState(
            {
                skillsList: result
            }
        );
    }

    changeHandlerState(selectedOption) {
        let result = selectedOption.value;
        this.setState(
            {
                stateLocated: result
            }
        );
    }

    //Submit button with alert
    submit() {
        console.log(this.state)
        //Make UPDATE request for Profile here
        const updateProfile = Object.assign({}, this.state);
        console.log(updateCurrentUser(updateProfile))
        Alert.success("You're changes have been saved!");
        window.location.reload();
        
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
                            <div className = "select-state"><Select options={states} onChange = {this.changeHandlerState} defaultValue = {{label: this.state.stateLocated, value: this.state.stateLocated}}/></div>
                        </div> 
                    </div>

                    <div className = "field"><h3>Skills:</h3>
                        <div className = "select"><Select options={options} isMulti onChange = {this.changeHandlerSkills} defaultValue = {skillsDefault}/></div>
                    </div> 

                    <div className = "field"><h3>Biography:</h3>
                        <textarea className = "textareas"
                            name="bio"  
                            onChange={this.changeHandler}
                            value={this.state.bio} >
                            
                        </textarea>

                    </div>
                    <div className = "hold-button">
                        <button className = "sub"
                            onClick= {this.submit}>
                            Save Changes
                        </button>
                    </div>
                </div>
                {this.state.name}<br/>
                {this.state.birthday}<br/>
                {this.state.career}<br/>
                {this.state.bio}<br/>
                {this.state.stateLocated}<br/>
                {this.state.skillsList}<br/>
            </div>
        )
    }
}

export default EditProfile;