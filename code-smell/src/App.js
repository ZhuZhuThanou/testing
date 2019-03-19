import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Registration from './containers/Registration';
import Home from './containers/Home';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/registration' component={Registration} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;