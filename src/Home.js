import React, { Component } from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import AnswerPollContainer from './AnswerPollContainer';
import ViewPoll from './ViewPoll';
import ResultsPoll from './ResultsPoll';
import NewPoll from './NewPoll';
import Leaderboard from './Leaderboard';

class Home extends Component {
  state = {
    selectedFilter: 'unanswered',
    filteredQuestions: []
  };

  componentWillMount() {
    this.props.loadQuestions();
  }

  onPollClick = id => {
    if (this.state.selectedFilter === 'answered') {
      this.props.history.push(`/result/${id}`);
    } else {
      this.props.history.push(`/questions/${id}`);
    }
  };

  filterQuestions = (questions, category, user) => {
    let filteredQuestions = [];
    for (let qu in questions) {
      let usernameList = [
        ...questions[qu].optionOne.votes,
        ...questions[qu].optionTwo.votes
      ];
      if (!usernameList.includes(user) && category === 'unanswered') {
        filteredQuestions.push(questions[qu]);
      }
      if (usernameList.includes(user) && category === 'answered') {
        filteredQuestions.push(questions[qu]);
      }
    }
    return filteredQuestions;
  };

  setFilter = filter => {
    this.setState({ selectedFilter: filter });
  };

  render() {
    const { loggedInUser, questions, users } = this.props;
    const filteredQuestions = this.filterQuestions(
      questions,
      this.state.selectedFilter,
      loggedInUser
    );
    return (
      <div>
        <div>
          <Link to="/">Home</Link> | <Link to="/add">Create New Poll</Link>|
          <Link to="/leaderboard">Leader Board</Link> |{' '}
          <button onClick={() => this.props.logout()}>Logout</button>
          <span>Logged in As {loggedInUser}</span>
          <Route
            path="/"
            exact
            component={() => (
              <div>
                <button
                  className={
                    this.state.selectedFilter === 'answered'
                      ? 'selectedFilter'
                      : ''
                  }
                  onClick={() => this.setFilter('answered')}
                >
                  Answered
                </button>
                <button
                  className={
                    this.state.selectedFilter === 'unanswered'
                      ? 'selectedFilter'
                      : ''
                  }
                  onClick={() => this.setFilter('unanswered')}
                >
                  Unanswered
                </button>
                <div>
                  {filteredQuestions.map(qu => (
                    <ViewPoll
                      key={qu.id}
                      id={qu.id}
                      author={qu.author}
                      optionOne={qu.optionOne.text}
                      avatar={users[qu.author].avatarURL}
                      onPollClick={() => this.onPollClick(qu.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          />
          <Route path="/add" component={() => <NewPoll />} />
          <Route path="/leaderboard" component={() => <Leaderboard />} />
          <Route
            path="/questions/:id"
            component={() => <AnswerPollContainer />}
          />
          <Route
            path="/result/:id"
            component={props => (
              <ResultsPoll questionID={props.match.params.id} />
            )}
          />
          <div />
        </div>
      </div>
    );
  }
}

export default withRouter(Home);
