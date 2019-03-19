import React from 'react';
import { shallow } from 'enzyme';

import { NoteForm } from './NoteForm';


describe('NoteForm', () => {
  it('note bahviour', () => {    
    let wrapper = shallow(<NoteForm isTest={true}/>);
    let inputText = wrapper.find("#noteForm-noteInput");
    inputText.simulate('change', { target: { value: "input not value" } })
    let button  = wrapper.find("#noteForm-addButton");
    button.simulate('click');
    expect(wrapper.state().text).toEqual('');
  });
});





