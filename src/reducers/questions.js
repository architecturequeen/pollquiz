export const questions = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_QUESTIONS':
      return action.questions;
    case 'SUBMIT_VOTE':
      return {
        ...state,
        [action.vote.quid]: {
          ...state[action.vote.quid],
          [action.vote.answer]: {
            ...state[action.vote.quid][action.vote.answer],
            votes: [
              ...state[action.vote.quid][action.vote.answer].votes,
              action.vote.user
            ]
          }
        }
      };
    case 'CREATE_POLL':
      return {
        [action.poll.id]: {
          ...action.poll
        },
        ...state
      };
    default:
      return state;
  }
};
