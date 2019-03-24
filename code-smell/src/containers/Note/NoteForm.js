import React, { Component } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNote } from '../../actions';
 
export class NoteForm extends Component {

  constructor() {
    super();
    this.state = {text: ''};
  }

  updateText(text) {
    this.setState({text});
  } 

  addNoteToStore() {
    if (!this.props.isTest) {
      this.props.addNote({...this.state});
    }
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <h3>Note Form</h3>
        <Link to='/'><h4>Return to list</h4></Link>
        <div className='form'>
          <Form>
            <FormGroup>
              <FormLabel>Note</FormLabel>
              <FormControl id="noteForm-noteInput" value={this.state.text} onChange={(event) => this.updateText(event.target.value)} />
            </FormGroup>
            <Button id="noteForm-addButton" onClick={() => this.addNoteToStore()}>Add note</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default connect(null, {addNote})(NoteForm);