import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ResultsPoll extends Component {
  render() {
    const { questions, questionID, loggedInUser } = this.props;
    const optionOneVoteCount = questions[questionID].optionOne.votes.length;
    const optionTwoVoteCount = questions[questionID].optionTwo.votes.length;
    const userAnswer = questions[questionID].optionOne.votes.includes(
      loggedInUser
    )
      ? 'optionOne'
      : 'optionTwo';

    return (
      <div>
        <div className={userAnswer === 'optionOne' ? 'selectedPoll' : ''}>
          <p> Would you rather {questions[questionID].optionOne.text}: </p>
          <p>
            {optionOneVoteCount} votes out of{' '}
            {optionTwoVoteCount + optionOneVoteCount}
          </p>
          <p>
            {Math.round(
              (optionOneVoteCount / (optionTwoVoteCount + optionOneVoteCount)) *
                100
            )}
            %
          </p>
        </div>
        <div className={userAnswer === 'optionTwo' ? 'selectedPoll' : ''}>
          <p> Would you rather {questions[questionID].optionTwo.text}: </p>
          <p>
            {optionTwoVoteCount} votes out of{' '}
            {optionOneVoteCount + optionTwoVoteCount}
          </p>
          <p>
            {Math.round(
              (optionTwoVoteCount / (optionTwoVoteCount + optionOneVoteCount)) *
                100
            )}
            %
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  loggedInUser: state.loggedInUser
});

export default withRouter(connect(mapStateToProps)(ResultsPoll));
