import React, {Component} from 'react';
import './Button.css';

// const Button = ({direction}) => {
//   return <div className={`button-${direction} button`}>button</div>
// }

class Button extends Component {
  handleClick = (e) => {
    //console.log(this.direction);
    //console.log(this.props.direction);
    this.props.handleClick(this.props.direction);
  }


  render(){
    return <div className={`button-${this.props.direction} button`} onClick={this.handleClick}></div>;
  }
}

export default Button;