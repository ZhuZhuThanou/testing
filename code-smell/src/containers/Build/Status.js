import React from 'react';

const Status = (props) => {
  let { lastBuildStatus, lastBuildTime, techDebt } = {...props.status};
  return (
    <div className='large-section'>
      <div className='large-row'>
        <div className='large-status-column' >
          <span className='large-status-label'>Last build status:</span>
          <span className='large-status-label large-status-value'>{lastBuildStatus}</span>
        </div>
        <div className='large-status-column'>
          <span className='large-status-label'>Last build time:</span>
          <span className='large-status-label large-status-value'>{lastBuildTime}</span>
        </div>
        <div className='large-status-column' >
          <span className='large-status-label'>Technical debt:</span>
          <span className='large-status-label large-status-value'>{techDebt}</span>
        </div>
      </div>   
    </div>
  );
}

export default Status;