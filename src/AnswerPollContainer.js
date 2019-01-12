import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import AnswerPoll from './AnswerPoll';
import { submitVote } from './actions';
import * as Data from './Data';

class AnswerPollContainer extends Component {
  state = {
    author: '',
    optionOne: '',
    optionTwo: ''
  };

  render() {
    const { loggedInUser, questions, users, submitAnswer } = this.props;
    const quID = this.props.match.params.id;

    if (!questions[quID]) return <p>Ooops! 404 This poll can't be found</p>;

    if (questions && questions[quID]) {
      return (
        <AnswerPoll
          author={questions[quID].author}
          questionID={quID}
          user={loggedInUser}
          optionOne={questions[quID].optionOne.text}
          optionTwo={questions[quID].optionTwo.text}
          avatar={users[questions[quID].author].avatarURL}
          users={users}
          submitAnswer={submitAnswer}
        />
      );
    }
  }
}

const updateAnswers = (dispatch, uid, quid, answer) => {
  Data._saveQuestionAnswer({ authedUser: uid, qid: quid, answer }).then(() => {
    dispatch(submitVote({ user: uid, quid, answer }));
  });
};

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  questions: state.questions,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  submitAnswer: (uid, quid, answer) =>
    updateAnswers(dispatch, uid, quid, answer)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AnswerPollContainer)
);
