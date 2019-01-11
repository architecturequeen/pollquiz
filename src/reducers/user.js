export const loggedInUser = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user;
    case 'LOGOUT':
      return null;
    default:
      return state;
  }
};

export const users = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_USERS':
      return action.users;
    case 'SUBMIT_VOTE':
      return {
        ...state,
        [action.vote.user]: {
          ...state[action.vote.user],
          answers: {
            ...state[action.vote.user].answers,
            [action.vote.quid]: action.vote.answer
          }
        }
      };
    case 'CREATE_POLL':
      return {
        ...state,
        [action.poll.author]: {
          ...state[action.poll.author],
          questions: [...state[action.poll.author].questions, action.poll.id]
        }
      };
    default:
      return state;
  }
};
