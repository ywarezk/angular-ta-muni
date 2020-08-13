/**
action: { type: '[message] Set Greeting', payload: 'new greeting text' }
 */

import { createAction, props } from '@ngrx/store';

export const SET_GREETING = '[message] Set Greeting';

export const setGreeting = createAction(
  SET_GREETING,
  props<{ newGreeting: string}>()
)
