import React, { Component } from 'react';

class FooBar extends Component {

  constructor() {
    super();
    this.state = { inputValue: '', result: ''};
  }

  recordInput = (event) => {
    this.setState({inputValue: event.target.value});
  }

  compute = async () => {
    let result = await this.props.compute(this.state.inputValue);
    this.setState({result: result});
  }


  render() {
    return (
    <div>
      <h1>FooBar</h1>
      <input className='foobarInput' onChange={event => this.recordInput(event)}/>
      <button className='foobarButton' onClick={() => this.compute()}>Run FooBar</button>
      <div className='foobarDisplayResult'>{this.state.result}</div>
    </div>);
  }
}

export default FooBar;