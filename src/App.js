import React, { Component } from 'react';
import './App.css';
import routes from './routes';


class App extends Component {
  
  
  
  render() {
    return (
      <div className="body">
        {/* <h1 style={{textAlign:'center'}}>YOU GOT THIS!</h1> */}
        {routes}
      </div>
    );
  }
}

export default App;