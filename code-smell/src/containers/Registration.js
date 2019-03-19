import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import {Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

import { createRegistration } from '../actions';

export class Registration extends Component {

  constructor() {
    super();
    this.state = {name: '', street: '', city: '', state: '', zip: ''};
  }

  /**
   * Use a factory to eliminate if else and case statement
   * @param {*} event 
   */
  updateValue(event) {
    console.log(this.state);
    switch(event.target.name) {
      case 'userName': 
        this.setState({name: event.target.value});
        break;
      case 'street': 
        this.setState({street: event.target.value});
        break;
      case 'city':
        this.setState({city: event.target.value});
        break;
      case 'state':
        this.setState({state: event.target.value});
        break;
      case 'zip': 
        this.setState({zip: event.target.value});
        break;  
      default:
        break;
    }
  }

  register() {
    console.log('register invoked');
  }

  render() {
    return (
      <div>
        <h2>Registration</h2>
        <Link to='/'><h4>Home</h4></Link>
        <div className='form'>
          <Form>
            <FormGroup>
              <FormLabel>Name</FormLabel><FormControl name='userName' onChange={(event) => {this.updateValue(event)}}/>
            </FormGroup >
            <FormGroup>
              <FormLabel>Street</FormLabel><FormControl name='street' onChange={(event) => {this.updateValue(event)}}/>
              <FormLabel>City</FormLabel><FormControl name='city' onChange={(event) => {this.updateValue(event)}}/>
              <FormLabel>State</FormLabel><FormControl name='state' onChange={(event) => {this.updateValue(event)}}/>
              <FormLabel>Zip Code</FormLabel><FormControl name='zip' onChange={(event) => {this.updateValue(event)}}/>
            </FormGroup>
            <Button onClick={() => this.register()}>Register</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(null, { createRegistration })(Registration);
