import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
var { connect } = require('react-redux');
import * as actionCreators from '../actions';
var {Navbar, Nav} = require('react-bootstrap');
var {Link} = require('react-router');
import examplePng from '../images/example.png';

class Counter extends Component {
  render() {
    var { counter, dispatch } = this.props;
    const actions = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
          <h2>Counter: {counter}</h2>
          <button onClick={actions.increment}>Increment</button>
          <button onClick={actions.decrement}>Decrement</button>
          <br/><br/>
          <img src={examplePng}/>
        </div>
    );
  }
}

export default connect(state => ({counter: state.counter}))(Counter);
