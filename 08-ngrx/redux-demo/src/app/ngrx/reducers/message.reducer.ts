import { createReducer, on } from '@ngrx/store';
import { setGreeting } from '../actions/message.actions';

/**
 * (state, action) => next state
 */
export const messageReducer = createReducer(
  {
    greeting: 'hello world from reducer'
  },
  on(setGreeting, (state, action) => {
    return {
      ...state,
      greeting: action.newGreeting
    }
  })
)
