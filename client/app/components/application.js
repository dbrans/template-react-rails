import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
var { connect } = require('react-redux');
import * as actionCreators from '../actions';
var {Navbar, Nav} = require('react-bootstrap');
var {Link} = require('react-router');

export default class Application extends Component {
  render() {
    return (
        <div>
          <Header/>
          <MainSection>{this.props.children}</MainSection>
        </div>
    );
  }
}


class Header extends Component {
  render() {
    return (
        <div id="nav">
          <Navbar brand={<Link to="/">Annotator</Link>}>
            <Nav>
              <li><Link to="/counter">Counter</Link></li>
            </Nav>
          </Navbar>
        </div>
    );
  }
}


class MainSection extends Component {
  render() {
    return (
        <div id="main">{this.props.children}</div>
    );
  }
}


