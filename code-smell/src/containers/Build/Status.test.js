import React from 'react';
import  { shallow } from 'enzyme';

import Status from './Status';

describe('<Status>', () => {
  it('validate elements', () => {
    let wrapper = shallow(<Status />);
    expect(wrapper.find('.large-status-value')).toHaveLength(3);
  });
});