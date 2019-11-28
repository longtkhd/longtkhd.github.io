/*
 *
 * MemberPage actions
 *
 */

import {
  DEFAULT_ACTION,
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  CREATE_USER_SUCCESS,
  CREATE_USER,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
// GET_USER
export function getUsers(query) {
  return {
    type: GET_USER,
    query,
  };
}
// GET_USER_SUCCESS
export function getUsersSuccess(data) {
  return {
    type: GET_USER_SUCCESS,
    data,
  };
}
// GET_USER_FAILED
export function getUsersError(error) {
  return {
    type: GET_USER_ERROR,
    error,
  };
}

//CREATE USERS HERE

export function createUserAction(userInfor) {
  return {
    type: CREATE_USER,
    userInfor,
  };
}

export function createUserSuccessAction(query) {
  return {
    type: CREATE_USER_SUCCESS,
    query,
  };
}
