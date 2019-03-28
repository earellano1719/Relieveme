import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import StandsByBorough from './components/StandsByBorough';
import CurrentLocation from './components/CurrentLocation';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/byborough' component={StandsByBorough}/>
          <Route path='/currentlocation' component={CurrentLocation}/>
        </Switch>
      </div>
    );
  }
}

export default App;
