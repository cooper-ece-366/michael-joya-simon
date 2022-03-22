import './App.css';
import React, { useState } from "react"
import Filter from './components/FilterTool';
import FriendPage from './components/FriendPage';

//Temporary rest API url
const apiUrlPrefix = "http://localhost:8080/api/user";


function App() {

  //UseState declarations
  const [name, setName] = useState("No Name Provided");
  const[id, setId] = useState("No ID Provided")

  //Function for sample get request
  function updateNameId() {
    fetch(apiUrlPrefix)
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setId(data.id);
        console.log(data);
      })
      .catch(err => {
        console.log("Cannot connect to API endpoint: %s", apiUrlPrefix);
      });
    console.log("Success");  
  }

  return (
    <div className="App">
      <FriendPage/>
      {/*
      <Filter/>
      

      <button onClick={updateNameId}>
        Click me!
      </button><br/>
      <span>{id}</span><br/>
      <span>{name}</span>
      */}
    </div>

  );
}

export default App;
