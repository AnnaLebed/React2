import React from 'react';
import './App.css';
import Header from "./Header";
import Users from "./Users";

class App extends React.Component{
  constructor(){
    super();
    console.log("Constructor");
  }
  
  
  render()
  {   
  return (
    <div className="App">
      <Header name = "there" />
      <header className="App-header"><h1>List of users</h1>       
      </header>
      <Users />      
    </div>
  );
  }
}

export default App;
