import { TYPES } from '../actions/loginActions';

const INITIAL_STATE = {
  isAuthenticated: false,
  'x-auth-login': '',
  'x-auth-token': ''
};

const setAuth = (data) => {
  sessionStorage.setItem('isAuthenticated', data['isAuthenticated']);
  sessionStorage.setItem('x-auth-login', data['x-auth-login']);
  sessionStorage.setItem('x-auth-token', data['x-auth-token']);
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SIGN_IN:
      const signIn = {
        isAuthenticated: true,
        'x-auth-login': action.user['x-auth-login'],
        'x-auth-token': action.user['x-auth-token']
      };

      setAuth(signIn);
      return {...state, ...signIn};

    default: return state;
  }
}
