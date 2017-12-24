import React, { Component } from "react";
import { Link } from "react-router";

class Main extends Component {
  render() {
<<<<<<< HEAD
    return (
      <div>
        <h1>
          <Link to="/"> Reduxstragram </Link>
        </h1>
       { React.cloneElement(this.props.children,this.props)} 
       
=======
    return 
    (
      <div>
        <h1>
          <Link to="/"> Reduxtragram </Link>
         {/* { React.cloneElement(this.props.children, this.props) } */}
        </h1>
>>>>>>> 35ceb242bec2797ed1629947b3c7e072c92c2755
      </div>
    );
  }
}
<<<<<<< HEAD
=======

>>>>>>> 35ceb242bec2797ed1629947b3c7e072c92c2755
export default Main;
