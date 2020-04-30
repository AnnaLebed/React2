import React from 'react';
import './App.css';
import Header from "./Header";
import Users from "./Users";
import Checkbox from "./Checkbox";
import Checkbox2 from "./Checkbox2.jsx";

class App extends React.Component{
  constructor(){
    super();
    console.log("Constructor");
  }
    
  render()
  {   
  return (
    <div className="App">
      <Checkbox />
      {/* <Checkbox2 /> */}
      {/* <Header name = "there" /> */}
      <header className="App-header"><h1>List of users</h1>       
      </header>
      
      <Users />      
    </div>
  );
  }
}

export default App;
