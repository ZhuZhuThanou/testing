import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import { Registration } from './Registration';

const wr = mount(<Registration />);
/** 
 * Example of an obscure test
 */
test('registration', () => {
  wr.setState({name: 'Joe', street: '12 Open Source Drive', city: 'React City', state: 'OS', zip: '12345'});
  if (wr.state) {
    expect(wr.state().name).toEqual('Joe');
    expect(wr.state().street).toEqual('12 Open Source Drive');
    expect(wr.state().city).toEqual('React City');
    expect(wr.state().state).toEqual('OS');
    expect(wr.state().zip).toEqual('12345');
  } else {
    expect(false).toBe(true);
  }
  console.log('--->', wr.find('.btn'));
  //wr.find('btn-primary')[0].simulate('click');
  //wr.simulate('click')
});