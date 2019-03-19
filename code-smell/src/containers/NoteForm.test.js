import React from 'react';
import { shallow } from 'enzyme';

import { NoteForm } from './NoteForm';



describe('NoteForm', () => {

  it('note components', () => {
    let wrapper = shallow(<NoteForm />);
    expect(wrapper.find("#noteForm-noteInput")).toHaveLength(1);
    expect(wrapper.find("#noteForm-addButton")).toHaveLength(1);
  });

  it('not state', () => {
    const inputValue = 'A note test';
    let wrapper = shallow(<NoteForm />);
    let inputText = wrapper.find("#noteForm-noteInput");
    inputText.simulate('change', { target: { value:  inputValue}});
    expect(wrapper.state().text).toEqual(inputValue);

  });

  it('note bahviour', () => {

    const inputValue = 'A note test';
    const addNote = (note) => {
      expect(note.text).toEqual(inputValue);
    };

    let wrapper = shallow(<NoteForm addNote={addNote} />);
    let inputText = wrapper.find("#noteForm-noteInput");
    inputText.simulate('change', { target: { value: inputValue } })
    let button  = wrapper.find("#noteForm-addButton");
    button.simulate('click');
  });

});