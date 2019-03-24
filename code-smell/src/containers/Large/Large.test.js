import React from 'react';
import { shallow } from 'enzyme';
import Large from './Large';

describe('<Large>', () => {
  it('validate components', () => {
    let wrapper = shallow(<Large />);
    expect(wrapper.find('.large-status-value')).toHaveLength(3);
    expect(wrapper.find('.large-issue-header')).toHaveLength(4);

    expect(wrapper.find('.large-issue-column-1')).toHaveLength(3);
    expect(wrapper.find('.large-issue-column-2')).toHaveLength(3);
    expect(wrapper.find('.large-issue-column-3')).toHaveLength(3);
    expect(wrapper.find('.large-issue-column-4')).toHaveLength(3);

    expect(wrapper.find('.large-data-row')).toHaveLength(2);

    expect(wrapper.find('.large-form-input')).toHaveLength(4);
  });
  
  it('row click should display detail', () => {
    let wrapper = shallow(<Large />);
    let selectedRow = wrapper.find('.large-data-row').at(0);

    selectedRow.simulate('click');
    expect(wrapper.find('.large-form-input').get(0).props.value).toEqual(100);
    expect(wrapper.find('.large-form-input').get(1).props.value).toEqual('Large.js');
    expect(wrapper.find('.large-form-input').get(2).props.value).toEqual('Large file. Possible code smell');
    expect(wrapper.find('.large-form-input').get(3).props.value).toEqual('Open');
  });
});