import React, {Component} from 'react';
import './FilterTool.css';
import Select from 'react-select';
import {options, stateNames} from '../constants/skillsList'
import Alert from 'react-s-alert';

class Filter extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: "",
      ageLower: 18,
      ageUpper: 100,
      skillset: ""
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testButton = this.testButton.bind(this); 
    this.handleOnChangeSelector = this.handleOnChangeSelector.bind(this);
    this.changeHandlerSkills = this.changeHandlerSkills.bind(this);
    }
    
    sampleData = [
          {
            id: 1,
            name: "Megan Bordar",
            age: 20,
            skills: ["Chemistry", "Biology"]   
          },
          {
              id: 2,
              name: "John Smith",
              age: 31,
              skills: ["Physics"]   
          },
      ]
    options = [
          { label:  'Chemistry', value:  'Chemistry'  },
          { label:  'Biology', value:  'Biology'  },
          { label:  'Physics', value:  'Physics'  },
          { label:  'Environmental', value:  'Environmental'  },
  
        ]
    handleOnChange(e) {
       this.setState(
            {
             [e.target.name] : e.target.value
            }
           );

    }

    handleOnChangeSelector(data) {
        this.setState({
            skillset: data
        })
    }
  
    handleSubmit = (e) => 
    {
        e.preventDefault()
        console.log(this.state)
    }

    changeHandlerSkills = (selectedOptions) =>  {
        let result = selectedOptions.map(a => a.value);
        this.setState(
            {
                skills: result
            }
        );
    }
    testButton(e) {
          var SendRequestID = e.target.id
          console.log(SendRequestID)
          if (SendRequestID == 1) { 
            Alert.success("You have sent a friend request to Megan Bordar")
          }
          if (SendRequestID == 2) { 
            Alert.success("You have sent a friend request to John Smith")
          }
          
    }
  render() { 
    return(<div className = "filter-total">
    <br/><br/><br/>
    <div className = "form-total">
    <h1 className = "head">Find Study Buddies</h1>
        <form>
            <div className = "form-box">
                <label htmlFor="name" className = "subtitle" >Name </label>
                <div>&nbsp;</div>
                <input placeholder= "John Smith" onChange = {this.handleOnChange} type="text" name="name" id="name" />
                <br/><br/>
                <label htmlFor="age" className = "subtitle" >Age Range </label>
                <div>&nbsp;</div>
                <label htmlFor="ageLower" className = "subtitle" > </label>
                <input value = {this.state.ageLower} onChange = {e => this.setState({ageLower: e.target.value.replace(/\D/,'')})} min = '18' type="text" pattern = "[0-9]*" name="ageLower" id="ageLower" /> 
                <div>&nbsp;</div>
                <label htmlFor= "ageUpper" className = "subtitle" > </label>
                <input value = {this.state.ageUpper} onChange = {e => this.setState({ageUpper: e.target.value.replace(/\D/,'')})} min = '18' type="text" pattern = "[0-9]*" name="ageUpper" id="ageUpper" />
                <br/><br/>
                <label htmlFor="skillset" className = "subtitle" >Skillset</label>
                <div className = "select"><Select options={options} isMulti onChange = {this.changeHandlerSkills}/></div>
            </div><br/><br/>
            <button onClick={this.handleSubmit} type="submit" className = "sub-button">
                Submit
            </button>
        </form>
    </div >
    <div className = "all-card"> 
    <h2 className = "suggested"> Suggestions Based on Your Activity</h2>{this.sampleData.map((val) => {
        return (
        <div className = "card" key = {val.id}>
            <h3>{val.name}</h3>
            <p>Age: {val.age}</p>
            <div>Skills: {val.skills.map(skill => <p id = {skill} className = "ind-skill">{skill}</p>)}</div>
            <button onClick = {this.testButton} id = {val.id} className = "friend-button">Send Study Buddy Request</button> <br></br>
            <br></br></div> 
        )})}
    </div>
</div>
    )};
        };
export default Filter;