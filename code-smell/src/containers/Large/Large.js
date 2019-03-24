import React, { Component } from 'react';


class Large extends Component {

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
    let { lastBuildStatus, lastBuildTime, techDebt } = {...this.state.status};
    let issues = [...this.state.issues];
    let { id, component, description, status } = {...this.state.selectedIssue};
    return (<div>
      <h3>Summary</h3>
      <div className="large-section">
        <div className="large-row">
          <div className="large-status-column" >
            <span className='large-status-label'>Last build status:</span><span className='large-status-label large-status-value'>{lastBuildStatus}</span>
          </div>
          <div className="large-status-column">
            <span className='large-status-label'>Last build time:</span><span className='large-status-label large-status-value'>{lastBuildTime}</span>
          </div>
          <div className="large-status-column" >
            <span className='large-status-label'>Technical debt:</span><span className='large-status-label large-status-value'>{techDebt}</span>
          </div>
        </div>   
      </div>
      <h3>Issues</h3>  
      <div className='large-section'>
        <div className="large-row">
          <div className="large-issue-column-1 large-issue-header">
            Issue ID
          </div>
          <div className="large-issue-column-2 large-issue-header" >
            Component
          </div>
          <div className="large-issue-column-3 large-issue-header" >
            Description
          </div>
          <div className="large-issue-column-4 large-issue-header" >
            Status
          </div>
        </div>
        { issues.map((issue, index) => {
          return(
            <div className="large-data-row" key={issue.id} onClick={() => this.selectIssue(index)}>
              <div className="large-issue-column-1">
                {issue.id}
              </div>
              <div className="large-issue-column-2" >
                {issue.component}
              </div>
              <div className="large-issue-column-3" >
                {issue.component}
              </div>
              <div className="large-issue-column-4" >
                {issue.status}
              </div>
            </div>
          )
        })}
      </div>
      <h3>Details</h3>
      <div className='large-section'>
        <div className='large-form-section'>
          <label className='large-form-label'>ID</label><input className='large-form-input' size="4" readOnly value={id} />  
        </div>
        <div>
          <label className='large-form-label'>Component</label><input className='large-form-input'  readOnly value={component} />
        </div>
        <div>
          <label className='large-form-label'>Description</label><input className='large-form-input' size="50" readOnly value={description} />  
        </div>
        <div>
          <label className='large-form-label'>Status</label>
          <select className='large-form-input' value={status} onChange={event => this.selectStatus(event) }>
            <option value="Open">Open</option>
            <option value="Fixed">Fixed</option>
            <option value="Re-open">Re-open</option>
          </select>
          <button onClick={() => this.saveSelectedStatus()}>Save</button>
        </div>
      </div>
      
    </div>);
  }
}

export default Large;
