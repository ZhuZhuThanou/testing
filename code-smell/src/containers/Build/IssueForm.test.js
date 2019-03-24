import React from 'react';
import { shallow } from 'enzyme';

import IssueForm from './IssueForm';

describe('<IssueForm>', () => {
  it('validate components', () => {
    let wrapper = shallow(<IssueForm />);
    expect(wrapper.find('.large-form-input')).toHaveLength(4);
  })
});