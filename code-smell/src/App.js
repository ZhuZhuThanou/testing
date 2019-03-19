import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
         <h2>Simple note taker</h2>
          <Link to='/noteform'><h3>Add note</h3></Link>
          {
            this.props.notes.map(note => {
              return (<div key={note.id}><h3>{note.text}</h3></div>);
            })
          }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {notes: [...state.notes]};
}
export default connect(mapStateToProps, null)(App);