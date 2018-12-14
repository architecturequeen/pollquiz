export const loggedInUser = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    default:
      return state;
  }
};

export const users = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return action.users;
    default:
      return state;
  }
};
