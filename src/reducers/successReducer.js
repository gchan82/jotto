import {actionTypes} from '../actions';

/**
 * @param  {} state=initialState
 * @param  {} action
 * @param  {} =>{switch(action.type
 * @param  {return{...state}default:returnstate}}} {casetypeName
 * @returns returnstate
 */

 export default (state = false, action) => {
  switch (action.type) {
    case (actionTypes.CORRECT_GUESS):
    return true;

    default:
      return state;
  }
}