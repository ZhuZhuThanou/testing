export const ADD_NOTE = 'ADD_NOTE';
export const CREATE_REGISTRATION = 'CREATE_REGISTRATION';

/**
 * 
 * @param {*} note = {text: 'sample text'} 
 */
export function addNote(note) {
  return {
    type: ADD_NOTE,
    note
  }
}

/**
 * 
 * @param {*} registration {name, address, state, zip}
 */
export function createRegistration(registration) {
  return {

  }
}