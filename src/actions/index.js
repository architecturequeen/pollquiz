export const login = user => ({
  type: 'LOGIN',
  user
});

export const loadUsers = users => ({
  type: 'LOAD_USERS',
  users
});
