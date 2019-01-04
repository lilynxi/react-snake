import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas';
import './App.css';

class App extends Component {

  appConfig = {
    CANVASWIDTH: 18,
    CANVASHEIGHT: 18,
    CELLSIZE: 22,
  };

  render(){
    return <div className="app"><Canvas appConfig={this.appConfig} /></div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));


