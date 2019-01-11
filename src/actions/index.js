export const login = user => ({
  type: 'LOGIN',
  user
});

export const logout = () => ({
  type: 'LOGOUT'
});

export const loadUsers = users => ({
  type: 'LOAD_USERS',
  users
});

export const loadQuestions = questions => ({
  type: 'LOAD_QUESTIONS',
  questions
});

export const submitVote = vote => ({
  type: 'SUBMIT_VOTE',
  vote
});

export const createPoll = poll => ({
  type: 'CREATE_POLL',
  poll
});
