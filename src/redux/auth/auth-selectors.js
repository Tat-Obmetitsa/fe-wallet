const getIsAuthenticated = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const getToken = state => state.auth.token;
const getResetToken = state => state.auth.resetToken;
const getUser = state => state.auth.user;

const authSelectors = {
  getIsAuthenticated,
  getUserName,
  getUser,
  getToken,
  getResetToken,
};

export default authSelectors;
