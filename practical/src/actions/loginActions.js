export const TYPES = {
  SIGN_IN: 'SIGN_IN'
};

export const signIn = ({login, token}) => {
  return {
    type: TYPES.SIGN_IN,
    user: {
      'x-auth-login': login,
      'x-auth-token': token
    }
  }
};
