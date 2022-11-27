import React, {useState} from "react";
import names from "./babyNamesData.json";
//import {useState} from "react";
//import logo from './logo.svg';
import './App.css';
import RenderName from "./RenderName";


function filterNames(inputName){
  return names.filter((babyName) => {
    return(
      babyName.name.toLowerCase().includes(inputName.toLowerCase())
    );
  });
}
function App() {
  const [arrayOfNames, setArrayOfNames] = useState(names);
  return (
    <div className="App">
      <h1>Baby Name Picker</h1>
      <form className="nosubmit">
        <input
          type="text"
          placeholder="Search for a name...."
          className="nosubmit"
          onChange={(e) => {
            setArrayOfNames(filterNames(e.target.value));
          }}
        ></input>
      </form>
      <div className="App-body">
        <RenderName names={arrayOfNames} />
      </div>
    </div>
  );
}

export default App;
