import { createAction } from '@reduxjs/toolkit';

// register new user
const regRequest = createAction('auth/regRequest');
const regSuccess = createAction('auth/regSuccess');
const regError = createAction('auth/regError');

// login
const signInRequest = createAction('auth/signInRequest');
const signInSuccess = createAction('auth/signInSuccess');
const signInError = createAction('auth/signInError');

// logout
const signOutRequest = createAction('auth/signOutRequest');
const signOutSuccess = createAction('auth/signOutSuccess');
const signOutError = createAction('auth/signOutError');

// get current user
const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserError = createAction('auth/getCurrentUserError');
//upload avatar
const uploadAvatarRequest = createAction('auth/uploadAvatarRequest');
const uploadAvatarSuccess = createAction('auth/uploadAvatarSuccess');
const uploadAvatarError = createAction('auth/uploadAvatarError');

// forgot password
const forgotPasswordRequest = createAction('auth/forgotPasswordRequest');
const forgotPasswordSuccess = createAction('auth/forgotPasswordSuccess');
const forgotPasswordError = createAction('auth/forgotPasswordError');

// verify resetToken
const verifyResetTokenRequest = createAction('auth/verifyResetTokenRequest');
const verifyResetTokenSuccess = createAction('auth/verifyResetTokenSuccess');
const verifyResetTokenError = createAction('auth/verifyResetTokenError');

// reset password
const resetPasswordRequest = createAction('auth/resetPasswordRequest');
const resetPasswordSuccess = createAction('auth/resetPasswordSuccess');
const resetPasswordError = createAction('auth/resetPasswordError');

const authActions = {
  regRequest,
  regSuccess,
  regError,
  signInRequest,
  signInSuccess,
  signInError,
  signOutRequest,
  signOutSuccess,
  signOutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  uploadAvatarRequest,
  uploadAvatarSuccess,
  uploadAvatarError,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  forgotPasswordError,
  resetPasswordRequest,
  resetPasswordSuccess,
  resetPasswordError,
  verifyResetTokenRequest,
  verifyResetTokenSuccess,
  verifyResetTokenError,
};

export default authActions;
