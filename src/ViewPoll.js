import React, { Component } from 'react';

class ViewPoll extends Component {
  render() {
    const { author, optionOne, avatar, onPollClick } = this.props;

    return (
      <div>
        <div> {author} asks</div>
        <div>
          <div>
            <img src={avatar} alt="user avatar" />
          </div>
          <div>
            <h2>Would you rather...</h2>
            <p>... {optionOne} ...</p>
            <div>
              <button onClick={onPollClick}>View Poll</button>
            </div>
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

export default ViewPoll;
