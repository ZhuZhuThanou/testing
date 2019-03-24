import React from 'react';
import { shallow } from 'enzyme';

import IssueTable from './IssueTable';

let issues = [{
          id: 1,
          component: 'test componet',
          description: 'code smell badly',
          status: 'Open'
         }]

describe('<IssueTable>', () => {
  it('has the components', () => {
    let wrapper = shallow(<IssueTable issues={issues}/>);
    expect(wrapper.find('.large-issue-header')).toHaveLength(4);

    expect(wrapper.find('.large-issue-column-1')).toHaveLength(2);
    expect(wrapper.find('.large-issue-column-2')).toHaveLength(2);
    expect(wrapper.find('.large-issue-column-3')).toHaveLength(2);
    expect(wrapper.find('.large-issue-column-4')).toHaveLength(2);

    expect(wrapper.find('.large-data-row')).toHaveLength(1);
  });
});