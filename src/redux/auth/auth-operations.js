import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://be-wallet.herokuapp.com/api';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const resetToken = {
  set(resetToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${resetToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const signUp = user => async dispatch => {
  dispatch(authActions.regRequest());

  try {
    const { data } = await axios.post('/users/signup', user);
    token.set(data.token);
    dispatch(authActions.regSuccess(data));
  } catch (err) {
    dispatch(authActions.regError(err.message));
  }
};

const signIn = user => async dispatch => {
  dispatch(authActions.signInRequest());

  try {
    const { data } = await axios.post('/users/signin', user);
    token.set(data.token);

    dispatch(authActions.signInSuccess(data));
  } catch (err) {
    dispatch(authActions.signInError(err.message));
  }
};

const signOut = () => async dispatch => {
  dispatch(authActions.signOutRequest());
  try {
    await axios.post('/users/signout');
    token.unset();
    dispatch(authActions.signOutSuccess());
  } catch (err) {
    dispatch(authActions.signOutError(err.message));
  }
};

const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(authActions.getCurrentUserRequest());

  try {
    const { data } = await axios.get('/users/current');
    dispatch(authActions.getCurrentUserSuccess(data));
  } catch (err) {
    dispatch(authActions.getCurrentUserError(err.message));
  }
};

const uploadAvatar = file => async dispatch => {
  dispatch(authActions.uploadAvatarRequest());
  try {
    const fd = new FormData();
    fd.append('name', file.name);
    fd.append('avatar', file);
    const { data } = await axios.patch('/users/avatars', fd);
    dispatch(authActions.uploadAvatarSuccess(data));
  } catch (err) {
    dispatch(authActions.uploadAvatarError(err.message));
  }
};
const forgotPassword = user => async dispatch => {
  dispatch(authActions.forgotPasswordRequest());

  try {
    const { data } = await axios.post('/users/forgot-password', user);
    token.set(data.resetToken.token);

    dispatch(authActions.forgotPasswordSuccess(data));
  } catch (err) {
    dispatch(authActions.forgotPasswordError(err.message));
  }
};

const verifyResetToken = resetToken => async dispatch => {
  dispatch(authActions.forgotPasswordRequest());

  try {
    const { data } = await axios.post(
      '/users/verified-reset-token',
      resetToken,
    );
    resetToken.set(data.resetToken.token);

    dispatch(authActions.forgotPasswordSuccess(data));
  } catch (err) {
    dispatch(authActions.forgotPasswordError(err.message));
  }
};

const resetPassword =
  ({ token, password, confirmPassword }) =>
  async dispatch => {
    dispatch(authActions.resetPasswordRequest());
    try {
      const credentials = { token, password, confirmPassword };
      const { data } = await axios.post('/users/reset-password', credentials);
      resetToken.unset();

      dispatch(authActions.resetPasswordSuccess(data));
    } catch (err) {
      dispatch(authActions.resetPasswordError(err.message));
    }
  };

const authOperations = {
  token,
  signUp,
  signIn,
  signOut,
  getCurrentUser,
  uploadAvatar,
  resetToken,
  forgotPassword,
  verifyResetToken,
  resetPassword,
};
export default authOperations;
