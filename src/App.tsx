import React, {Component} from 'react';
import './App.css';
import {ScreensRoot} from "./screens/Root";

export class App extends Component<any, any> {

  render() {
    return (
        <div className="app">
          <ScreensRoot/>
        </div>
    );
  }
}

export default App;
