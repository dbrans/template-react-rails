import React, { Component } from 'react';
import Application from './components/application';
import Counter from './components/counter';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
var {Router, Route, Redirect} = require('react-router');
var { reduxRouteComponent, routerStateReducer } = require('redux-react-router');

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(Object.assign({}, {router: routerStateReducer}, reducers));
const store = createStoreWithMiddleware(reducer);

export default class Root extends React.Component {
  render() {
    var {history} = this.props;
    return (
        <Provider store={store}>
          {renderRoutes.bind(null, history)}
        </Provider>
    );
  }
}

function renderRoutes(history) {
  return (
      <Router history={history}>
        <Route component={reduxRouteComponent(store)}>
          <Route component={Application}>
            <Route path="counter" component={Counter}/>
          </Route>
          <Redirect from="/" to="/counter" />
        </Route>
      </Router>
  );
}
