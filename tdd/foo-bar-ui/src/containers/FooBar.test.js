import React from 'react';
import { shallow } from 'enzyme';
import FooBar from './FooBar';

describe('<FooBar />', () => {
  
  let fooBarWrapper = null;

  beforeEach(() => {
    fooBarWrapper =  shallow(<FooBar />);
  });

  it('number input should exists', () => {
    expect(fooBarWrapper.find('.foobarInput')).toHaveLength(1);
  });

  it('button to get result should exists', () => {
    expect(fooBarWrapper.find('.foobarButton').text()).toEqual('Run FooBar');
  });

  it('result header should exists', () => {
    expect(fooBarWrapper.find('.foobarDisplayResult')).toHaveLength(1);
  });

  it('numbered entered should be stored to compute', () => {
    fooBarWrapper.find('.foobarInput').simulate('change', {target: {value: 1}});
    expect(fooBarWrapper.state().inputValue).toEqual(1);
  });

  it('entered value 3 number and expect Foo result', async () => {
    fooBarWrapper.setProps({compute: async (value) => { return Promise.resolve('Foo')}});
    fooBarWrapper.find('.foobarInput').simulate('change', {target: {value: 1}});
    await fooBarWrapper.find('.foobarButton').simulate('click');
    let result = fooBarWrapper.find('.foobarDisplayResult').text();

    expect(result).toEqual('Foo');
  });
});