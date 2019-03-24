import React, { Component } from 'react';

import Status from './Status';
import IssueTable from './IssueTable';
import IssueForm from './IssueForm';

class Small extends Component {

  constructor() {
    super();
    this.state = {status: {lastBuildStatus: 'PASS', lastBuildTime: '4m20s', techDebt: "2 days"},
         issues: [{
          id: 100,
          component: 'Large.js',
          description: 'Large file. Possible code smell',
          status: 'Open'
         },{
          id: 101,
          component: 'Cart.js',
          description: 'Deep nested statement',
          status: 'Open'
         }], selectedIssue: {
          id: '',
          component: '',
          description: '',
          status: ''
         }};
  }

  selectIssue = (index) => {
    let selectedIssue = {...this.state.issues[index]};
    this.setState({selectedIssue});
  }

  selectStatus = (event) => {
    let selectedIssue = {...this.state.selectedIssue};
    selectedIssue.status = event.target.value;
    this.setState({selectedIssue});
  }

  saveSelectedStatus = () => {
    let issues = [...this.state.issues];
    let index = issues.findIndex(issue => {
      return issue.id === this.state.selectedIssue.id;
    });
    issues[index] = {...this.state.selectedIssue};
    this.setState({issues});
  }

  render() {
    let issues = [...this.state.issues];
    return (<div>
      <h3>Summary</h3>
      <Status status={{...this.state.status}} />

      <h3>Issues</h3>  
      <IssueTable issues={issues} handleSelect={this.selectIssue}/>
      
      <h3>Details</h3>
      <IssueForm issue={{...this.state.selectedIssue}} 
            handleStatusChange={this.selectStatus} handleSaveStatus={this.saveSelectedStatus}/>
      
    </div>);
  }
}

export default Small;
