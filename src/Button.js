import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
  handleClick = (e) => {
    this.props.handleClick(this.props.direction);
  }


  render(){
    return <div className={`button-${this.props.direction} button`} onClick={this.handleClick}></div>;
  }
}

export default Button;