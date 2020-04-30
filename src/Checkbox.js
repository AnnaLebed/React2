import React from 'react';
// import Header from "./Header";


export default class Checkbox extends React.Component {
    constructor(props){
    super(props);
    this.state = {isChecked:false};
    // this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked  = () =>  {
        this.setState({isChecked: !this.state.isChecked});
        console.log("Was checked")
    }
  
   
    render(){              
        if (this.state.isChecked) {
        alert(("I am alive!"))
        } 

    return( 
          <div>                
              <div className = "mt-3 mb-3">
                  <input type="checkbox" className = "mt-5" onChange={ this.handleChecked }/>                   
                  <label htmlFor="alert">Check me</label>
                  <h2>isChecked:{this.state.isChecked}</h2>
              </div>
          </div>
        );
    }
}


