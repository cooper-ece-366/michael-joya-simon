import React, {Component} from 'react';
import './FilterTool.css';
import Select from 'react-select';
import {options, stateNames} from '../constants/skillsList'
import Alert from 'react-s-alert';
import { getFilteredUsers } from '../util/APIUtils';
import { API_BASE_URL } from '../constants';


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
    this.viewProfileButton = this.viewProfileButton.bind(this);
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
          Alert.success("Sent Study Buddy Request!")  
    }

    viewProfileButton(e) { 
        console.log(e.target.id)
    }

  render() { 
    return(
    <div className = "filter-total">
    <div className = "form-total">
    <br/><br/><br/>
    <h2 className = "head">Find Study Buddies</h2>
        <form>
            <div className = "form-box">
                <label htmlFor="name" className = "subtitle-filter" >Name </label>
                <div>&nbsp;</div>
                <input onChange = {this.handleOnChange} type="text" name="name" id="name" className = "input-box-filter" />
                <br/><br/>
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
                <label htmlFor="skillset" className = "subtitle-filter" >Skillset</label>
                <div>&nbsp;</div>
                <div className = "select"><Select options={options} isMulti onChange = {this.changeHandlerSkills}/></div>
                <button onClick={this.handleSubmit} type="submit" className = "sub-button">
                Submit
                </button>
            </div><br/><br/>
            
        </form>
    </div >
    <div className = "all-card"> 
    <br/><br/><br/>
    <h2 className = "suggested"> Search Suggestions</h2>
    {this.state.filteredUserList.map((val) => {
        return (
        <div className = "card" key = {val.id}>
             <div className ="profile-filter-img">
                            { 
                                val.imageUrl ? (
                                    <img src={val.imageUrl} alt={val.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{val.name && val.name[0]}</span>
                                    </div>
                                )
                            }
                        </div> <div>&nbsp;</div>
            <div className = "name-in-suggested">{val.name}</div>
            <div>&nbsp;</div>
            <div className = "skills-in-suggested">{val.skillsList}</div>
            <div>&nbsp;</div>
            <button onClick = {this.viewProfileButton} id = {val.id} className = "profile-button">View Profile</button> &nbsp; 
            <button onClick = {this.friendRequestButton} id = {val.id} className = "friend-button">Send Study Buddy Request</button> &nbsp; &nbsp;
            <br></br></div> 
        )})}
    </div>
</div>
    )};
        };
export default Filter;