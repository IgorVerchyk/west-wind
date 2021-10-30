import { createAction} from "@reduxjs/toolkit";

const loginRequest = createAction('AUTH/loginRequest');
const loginSuccess = createAction('AUTH/loginSuccess');
const loginError = createAction('AUTH/loginError');

const logoutRequest = createAction('AUTH/logoutRequest');
const logoutSuccess = createAction('AUTH/logoutSuccess');
const logoutError = createAction('AUTH/logoutError');

const currentUserRequest = createAction('AUTH/currentUserRequest');
const currentUserRejected = createAction('AUTH/currentUserRejected');
const currentUserError = createAction('AUTH/currentUserError');


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  loginRequest,
  loginSuccess,
  loginError,

  logoutRequest,
  logoutSuccess,
  logoutError,

  currentUserRequest,
  currentUserRejected,
  currentUserError,
};