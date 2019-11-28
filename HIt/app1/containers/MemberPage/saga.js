import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import APICall from '../../APICall';
import { USER } from '../../urlConfig';
import * as types from './constants';
import { getUsersSuccess, getUsersError,createUserSuccessAction } from './actions';
 import { CREATE_USER_SUCCESS } from '../../containers/MemberPage/constants';

export function* getUsers(action) {
  console.log(action);
  try {
    const dataUser = yield call(APICall, {
      url: `${USER}`,
      method: 'GET',
    });
    if (dataUser) {
      console.log(dataUser.data);
      yield put(getUsersSuccess(dataUser.data));
    } else {
      yield put(getUsersError({}));
    }
  } catch (error) {
    yield put(getUsersError(error));
  }
}

//create users here
export function* createUser(action) {
  try {
    const createdUser = yield call(APICall, {
      url: `${USER}`,
      method: 'POST',
      data: action.userInfor,
    });
    if (createdUser) {
      yield put(
        createUserSuccessAction({
          filter: {
            role: action.userInfor.role,
          },
        }),
      );
      
    } else {
      yield put(getUsersError({}));
    
    }
  } catch (error) {
    yield put(getUsersError(error));
  }
}


// Individual exports for testing
export default function* memberPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_USER, getUsers);
  yield takeLatest(types.CREATE_USER, createUser);
  yield takeLatest(CREATE_USER_SUCCESS, getUsers);
}
