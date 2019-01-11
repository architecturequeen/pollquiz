import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Data from './Data';
import { createPoll } from './actions';

class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  };

  handleSubmit = () => {
    let question = {
      author: this.props.loggedInUser,
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    };

    Data._saveQuestion(question).then(formattedQuestion => {
      this.props.dispatch(createPoll(formattedQuestion));
      this.props.history.push('/');
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.getAttribute('option')]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <div>
          <p>Would you rather...</p>
          <form>
            <label>Option One</label>
            <input
              type="text"
              option="optionOne"
              onChange={this.handleChange}
            />
            <label>Option Two</label>
            <input
              type="text"
              option="optionTwo"
              onChange={this.handleChange}
            />
            <input
              type="button"
              value="Submit Answer"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loggedInUser,
  questions: state.questions
});

export default withRouter(connect(mapStateToProps)(NewPoll));
