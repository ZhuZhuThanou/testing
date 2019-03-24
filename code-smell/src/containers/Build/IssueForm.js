import React from 'react';


const IssueForm = (props) => {
  let { id, component, description, status } = {...props.issue};
  return (
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
          <select className='large-form-input' value={status} onChange={event => props.handleStatusChange(event) }>
            <option value="Open">Open</option>
            <option value="Fixed">Fixed</option>
            <option value="Re-open">Re-open</option>
          </select>
          <button onClick={() => props.handleSaveStatus()}>Save</button>
        </div>
      </div>
  );
}

export default IssueForm;