import React from 'react';

export default class Checkbox2 extends React.Component {
    constructor(props){
    super(props);
    this.state = {isChecked:false};
    // this.handleChecked = this.handleChecked.bind(this);
    }

    handleChecked () {
       this.state(prevState => {
           return{
            isChecked: !prevState.isChecked
           };
        });
        console.log("Was checked")
    };
  
   
    render(){          
       
    return( 
          <div>                
              <div className = "mt-3 mb-3">
                  <input type="checkbox" className = "mt-5" onChange={ this.handleChecked }/>                   
                  <label htmlFor="alert">Check me</label>
                  <ChildComponent />
              </div>
          </div>
        );
    }
}


function ChildComponent() {
    return (
      alert("I'm alive!")
    );
  }