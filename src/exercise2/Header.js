import React from 'react';


class Header extends React.Component {
  constructor(props){
  super();
  // console.log("Constructor");
  }

  componentDidMount(){
    alert("I am alive!")
    // console.log("Mounted");
  }
  render(){    
  return( 
    <h1>Hello {this.props.name}</h1>);
  }
}


export default Header;