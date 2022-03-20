import React from 'react';
import './FilterTool.css';
import { useState } from "react";
import MultiSelect from  'react-multiple-select-dropdown-lite'
import  'react-multiple-select-dropdown-lite/dist/index.css'

function Filter() {
    
    //Filter fields for now
    const [formData, setFormData] = useState({
        name: "",
        ageLower: 18,
        ageUpper: 100,
        skillset: [],
    })

    //Will be replaced by MySQL Query Data
    const sampleData = [
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
        
    //Add options for all possible skills
    const  options  = [
        { label:  'Chemistry', value:  'Chemistry'  },
        { label:  'Biology', value:  'Biology'  },
        { label:  'Physics', value:  'Physics'  },
        { label:  'Environmental', value:  'Environmental'  },

        //Add to here for list of skills available to be filtered from
      ]

    //Function to make multiple skillsets into an array
    const  handleOnChange  =  val  => {
        var namesArr = val.split(",")
        setFormData({...formData, skillset: namesArr})
    }

    //Function that will be used for get requests
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        //Make Get Requests from here with formData Info
    }

    //Send Friend Request here given the id of the individual
    const testButton = (e) => {
        var SendRequestID = e.target.id
        console.log(SendRequestID)
    }

        return (
        <div className = "filter-total">
            <br/><br/><br/>
            <div className = "form-total">
            <h1 className = "head">Find Study Buddies</h1>
                <form>
                    <div className = "form-box">
                        <label htmlFor="name" className = "subtitle" >Name</label>
                        <input placeholder= "John Smith" onChange = {(e) => setFormData({...formData, name: e.target.value})} value={formData.name} type="text" name="name" id="name" />

                        <label htmlFor="ageLow" className = "subtitle" >Age Range</label>
                        <input onChange = {(e) => setFormData({...formData, ageLower: e.target.valueAsNumber || 0})} value={formData.ageLower} min = '18' type="number" name="ageLower" id="ageLower" />
                        <input onChange = {(e) => setFormData({...formData, ageUpper: e.target.valueAsNumber || 0})} value={formData.ageUpper} min = '18' type="number" name="ageUpper" id="ageUpper" />

                        <label htmlFor="skillset" className = "subtitle" >Skillset</label>
                        <MultiSelect className = "multi-sel"
                            onChange={handleOnChange}
                            options={options}
                        />
                    </div><br/><br/>
                    <button onClick={handleSubmit} type="submit" className = "sub-button">
                        Submit
                    </button>
                </form>
            </div >
            <div className = "all-card">{sampleData.map((val) => {
                return (
                <div className = "card" key = {val.id}>
                    <h2>{val.name}</h2>
                    <p>{val.age} Years Old</p>
                    <div>Skills: {val.skills.map(skill => <p id = {skill} className = "ind-skill">{skill}</p>)}</div><br/>
                    <button onClick = {testButton} id = {val.id} className = "friend-button">Send Study Buddy Request</button>
                </div>
                )})}
            </div>
        </div>
        );
 }
  
export default Filter;