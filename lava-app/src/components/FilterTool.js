import React, {Component} from 'react';
import './FilterTool.css';
import Select from 'react-select';
import {options, stateNames} from '../constants/skillsList'
import Alert from 'react-s-alert';
import { getFilteredUsers } from '../util/APIUtils';



class Filter extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: "",
      skillsList: "",
      filteredUserList: []
    }

   

    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testButton = this.testButton.bind(this); 
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


    handleOnChange(e) {
       this.setState(
            {
             [e.target.name] : e.target.value
            }
           );

    }
  
    async handleSubmit(e)
    {
        e.preventDefault()
        console.log(this.state)
        const filter = Object.assign({}, this.state);
        await getFilteredUsers(filter).then((response) => {
            this.state.filteredUserList = response
        })
        console.log(this.state.filteredUserList)
        this.setState(
            {
                filteredUserList: this.state.filteredUserList
            }
        )

    }

    changeHandlerSkills = (selectedOptions) =>  {
        let result = selectedOptions.map(a => a.label).toString();
        this.setState(
            {
                skillsList: result
            }
        );
    }

    testButton(e) {
          var SendRequestID = e.target.id
          console.log(SendRequestID)  
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
                <input placeholder= "First Last" onChange = {this.handleOnChange} type="text" name="name" id="name" />
                <br/><br/>
                <label htmlFor="age" className = "subtitle" >Age Range </label>
                <div>&nbsp;</div>
                {/* 
                <label htmlFor="ageLower" className = "subtitle" > </label>
                <input value = {this.state.ageLower} onChange = {e => this.setState({ageLower: e.target.value.replace(/\D/,'')})} min = '18' type="text" pattern = "[0-9]*" name="ageLower" id="ageLower" /> 
                <div>&nbsp;</div>
                <label htmlFor= "ageUpper" className = "subtitle" > </label>
                <input value = {this.state.ageUpper} onChange = {e => this.setState({ageUpper: e.target.value.replace(/\D/,'')})} min = '18' type="text" pattern = "[0-9]*" name="ageUpper" id="ageUpper" />
                <br/><br/>
                */}
                <label htmlFor="skillset" className = "subtitle" >Skillset</label>
                <div>&nbsp;</div>
                <div className = "select"><Select options={options} isMulti onChange = {this.changeHandlerSkills}/></div>
            </div><br/><br/>
            <button onClick={this.handleSubmit} type="submit" className = "sub-button">
                Submit
            </button>
        </form>
    </div >
    <div className = "all-card"> 
    <h2 className = "suggested"> Suggestions Based on Your Activity</h2>{this.state.filteredUserList.map((val) => {
        return (
        <div className = "card" key = {val.id}>
            <h3>{val.name}</h3>
            <div>Skills: {val.skillsList}</div>
            <button onClick = {this.testButton} id = {val.id} className = "friend-button">Send Study Buddy Request</button> <br></br>
            <br></br></div> 
        )})}
    </div>
</div>
    )};
        };
export default Filter;