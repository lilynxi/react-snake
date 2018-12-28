import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Canvas from './Canvas';

class App extends Component {

  appConfig = {
    CANVASWIDTH: 500,
    CANVASHEIGHT: 500,
    CELLSIZE: 20,
  }
  
  render(){
    return <div><Canvas appConfig={this.appConfig} /></div>
  }
}

ReactDOM.render(<App/>, document.querySelector('#root'));