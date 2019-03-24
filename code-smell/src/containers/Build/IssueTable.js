import React from 'react';

const IssueTable = (props) => {

  let issues = [...props.issues];
  return (
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
            <div className="large-data-row" key={issue.id} onClick={() => props.handleSelect(index)}>
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
  );

}

export default IssueTable;