import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class AnswerPoll extends Component {
  state = {
    value: 'optionOne'
  };

  handleSubmit = () => {
    console.log('handleSubmit');
    this.props.submitAnswer(
      this.props.user,
      this.props.questionID,
      this.state.value
    );
    this.props.history.push(`/result/${this.props.questionID}`);
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  render() {
    const { author, optionOne, optionTwo, avatar } = this.props;
    return (
      <div>
        <div> {author} asks</div>
        <div>
          <div>
            <img src={avatar} alt="user avatar" />
          </div>
          <div>
            <p>Would you rather...</p>
            <form>
              <input
                type="radio"
                name="options"
                value="optionOne"
                checked={this.state.value === 'optionOne'}
                onChange={this.handleChange}
              />
              <label>{optionOne}</label>
              <input
                type="radio"
                name="options"
                value="optionTwo"
                checked={this.state.value === 'optionTwo'}
                onChange={this.handleChange}
              />
              <label>{optionTwo}</label>
              <input
                type="button"
                value="Submit Answer"
                onClick={this.handleSubmit}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AnswerPoll);
