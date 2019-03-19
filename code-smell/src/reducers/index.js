import { combineReducers} from 'redux'

import { ADD_NOTE } from '../actions';


/**
 * 
 * @param {*} state represents array not notes
 * @param {*} action 
 */
function notes(state = [], action) {
  console.log('notes reducer', action.note);
  switch(action.type) {
    case ADD_NOTE:
      return [...state, {id: state.length, text: action.note.text}];
    default:
      return state;
  }
}

export default combineReducers({notes});