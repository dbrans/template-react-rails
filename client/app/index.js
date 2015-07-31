import React from 'react';
import Root from './Root';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';
import HashHistory from 'react-router/lib/HashHistory';

const history = new HashHistory();

React.render(<Root history={history}/>, document.getElementById('react-root'));
