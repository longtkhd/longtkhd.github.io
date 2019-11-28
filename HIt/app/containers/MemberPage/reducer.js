/*
 *
 * MemberPage reducer
 *
 */

import produce from 'immer';
import {
  DEFAULT_ACTION,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  CREATE_USER,
  CREATE_USER_SUCCESS,
} from './constants';

export const initialState = {
  users: [],
  loading: false,
  error: false,
  success: false,
};

/* eslint-disable default-case, no-param-reassign */
const memberPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case GET_USER:
        return {
          ...state,
          loading: true,
          errorr: false,
          success: false,
        };
      // .set('loading', true)
      // .set('error', false)
      // .set('success', false);
      case GET_USER_SUCCESS:
        return {
          ...state,
          users: action.data.users,
          loading: false,
          error: false,
          success: true,
        };
      // .set('loading', false)
      // .set('error', false)
      // .set('success', true)
      // .set('users', action.data);
      // return draft[users](action.data);
      case GET_USER_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
          success: false,
        };
      // .set('loading', false)
      // .set('error', true)
      // .set('success', false);
      

      
      default:
        return state;
    }
  });

export default memberPageReducer;
