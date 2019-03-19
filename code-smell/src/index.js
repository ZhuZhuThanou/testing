import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers';

import App from './App';
import NoteForm from './containers/NoteForm';
import Registration from './containers/Registration';

import './index.css';
import Login from './containers/Login';

const store = createStore(rootReducer);
const Wrapper = () => {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/login' component={Login} />
          <Route path='/noteform' component={NoteForm} />
          <Route path='/registration' component={Registration} />
        </Switch>
      </BrowserRouter>
  </Provider>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));