import React, {Component} from 'react';
import './FilterTool.css';
import Select from 'react-select';
import {options, stateNames} from '../constants/skillsList'
import Alert from 'react-s-alert';
import './Card.css'
import { getFilteredUsers, postAdd } from '../util/APIUtils';


class Filter extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      name: "",
      skillsList: "",
      filteredUserList: [],
    }
    
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.friendRequestButton = this.friendRequestButton.bind(this); 
    this.changeHandlerSkills = this.changeHandlerSkills.bind(this);
    }


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

    friendRequestButton(e) {
          var SendRequestID = e.target.id
          console.log(SendRequestID)
          postAdd(SendRequestID)
          Alert.success("Study Buddy Request Sent")

    }


  render() { 
    return(
    <div className = "filter-total" style = {{height:"100vh"}}>
    <div className = "form-total">
    <br/><br/><br/>
    <h2 className = "head">Find Study Buddies</h2>
        <form>
            <div className = "form-box">
                <div className = "name-filter-left">
                    <label htmlFor="name" className = "subtitle-filter" >Name</label>
                    <input onChange = {this.handleOnChange} type="text" name="name" id="name" className = "input-filter-name" />
                </div>
                {/* 
                <label htmlFor="age" className = "subtitle" >Age Range </label>
                <div>&nbsp;</div>
                
                <label htmlFor="ageLower" className = "subtitle-filter" > </label>
                <input value = {this.state.ageLower} onChange = {e => this.setState({ageLower: e.target.value.replace(/\D/,'')})} min = '18' type="text" pattern = "[0-9]*" name="ageLower" id="ageLower" /> 
                <div>&nbsp;</div>
                <label htmlFor= "ageUpper" className = "subtitle-filter" > </label>
                <input value = {this.state.ageUpper} onChange = {e => this.setState({ageUpper: e.target.value.replace(/\D/,'')})} min = '18' type="text" pattern = "[0-9]*" name="ageUpper" id="ageUpper" />
                <br/><br/>
                */}
                <div className = "skillset-filter-middle">
                    <label htmlFor="skillset" className = "subtitle-filter" >Skillset</label>
                    
                    <div className = "select-filter"><Select options={options} isMulti onChange = {this.changeHandlerSkills}/></div>
                </div>
                <div className = "submit-button-right">
                    <button onClick={this.handleSubmit} type="submit" className = "sub-button">
                    Search
                    </button>
                </div>
            </div><br/><br/>
            
        </form>
    </div >
    <div className = "all-card"> 
    {this.state.filteredUserList.map((val) => {
        return (
        <div className = "card" key = {val.id}>
            <div className = "upper-container">
                <div className = 'image-container'>
                    <img src = {val.imageUrl} alt = {val.name} height = "100px" width = "100px"/>
                </div>
                <div className = "name-in-suggested">{val.name}</div>
                <div className = "lower-container"> 
                    <div className = "skills-in-suggested">
                        <h4 className = "subtitle-in-card">Skills</h4>
                        <div className = "skills-all">{val.skillsList.split(',').map((val) => {
                                        return(<div className = "values-in-skills">{val}</div>)
                                    })}</div>
                    </div>                
                    <div className = "career">
                        <h4 className = "subtitle-in-card">Career</h4>
                        <div className = "values-in-card">{val.career}</div>
                    </div>        
                    <div className = "bio">
                        <h4 className = "subtitle-in-card">State</h4>
                        <div className = "values-in-card">{val.stateLocated}</div>
                    </div>        
                    <div className = "bio">
                        <h4 className = "subtitle-in-card">About Me</h4>
                        <div className = "values-in-card">{val.bio}</div>
                    </div>
                    
                </div>
                
                <button onClick = {this.friendRequestButton} id = {val.id} className = "friend-button">Send Study Buddy Request</button> 
            </div>
        </div> 
        )})}
    </div>
</div>
    )};
        };
export default Filter;