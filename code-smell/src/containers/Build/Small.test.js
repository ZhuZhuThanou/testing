import React from 'react';
import { shallow } from 'enzyme';
import Small from './Small';

describe('<Small>', () => {
  
  it('row click should display detail', () => {
    let wrapper = shallow(<Small />);

    let issueTables = wrapper.find('IssueTable').dive();
    let selectedRow = issueTables.find('.large-data-row').at(0);
    selectedRow.simulate('click');
    
    let issueForm = wrapper.find('IssueForm').dive();
    expect(issueForm.find('.large-form-input').get(0).props.value).toEqual(100);
    expect(issueForm.find('.large-form-input').get(1).props.value).toEqual('Large.js');
    expect(issueForm.find('.large-form-input').get(2).props.value).toEqual('Large file. Possible code smell');
    expect(issueForm.find('.large-form-input').get(3).props.value).toEqual('Open');
  });
});