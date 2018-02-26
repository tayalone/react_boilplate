import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom'

import Main from './Containers/Main/Main'
import ReduxContainer from './Containers/Redux/ReduxContainer'
import ReduxThunkContainer from './Containers/ReduxThunk/ReduxThunkContainer'
import AxiosContainer from './Containers/Axios/AxiosContainer'
import RouterContainer from './Containers/ReactRouterDom/RouterContainer'

import Navigation_Bar from './Components/UI/Navigation_Bar/Navigation_Bar'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navigation_Bar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <ReduxContainer/> */}
        <Switch>
          <Route path="/redux" component={ReduxContainer} />
          <Route path="/redux-thunk" component={ReduxThunkContainer} />
          <Route path="/axios" component={AxiosContainer} />
          <Route path="/router" component={RouterContainer} />
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    );
  }
}

export default App;
