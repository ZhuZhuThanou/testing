import React from 'react';
import ReactDOM from 'react-dom';

import FooBar from './containers/FooBar';
import FooBarService from './logic/FooBarService';
import './index.css';

const fooBarService = new FooBarService();

ReactDOM.render((<FooBar compute={fooBarService.compute} />), document.getElementById('root'));