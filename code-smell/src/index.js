import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux'
import rootReducer from './reducers';

import App from './App';
import NoteForm from './containers/Note/NoteForm';
import Large from './containers/Large/Large';
import Small from './containers/Build/Small';

import './index.css';

const store = createStore(rootReducer);
const Wrapper = () => {
  
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/noteform' component={NoteForm} />
          <Route path='/large' component={Large} />
          <Route path='/small' component={Small} />
        </Switch>
      </BrowserRouter>
  </Provider>
  );
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));