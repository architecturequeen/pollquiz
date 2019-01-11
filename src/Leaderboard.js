import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  sortUsers = userArr => {
    return userArr.sort(this.compare);
  };

  compare = (a, b) => {
    let aPoints =
      Object.keys(this.props.users[a].answers).length +
      this.props.users[a].questions.length;
    let bPoints =
      Object.keys(this.props.users[b].answers).length +
      this.props.users[b].questions.length;
    if (aPoints > bPoints) return -1;
    if (aPoints < bPoints) return 1;
    return 0;
  };

  render() {
    const { users } = this.props;
    let userArr = Object.keys(users);
    let sortedUserArr = this.sortUsers(userArr);

    return (
      <div>
        {sortedUserArr.map(item => (
          <div key={item}>
            <div>
              <img src={users[item].avatarURL} alt="user avatar" />
            </div>
            <div>
              <p>{users[item].name}</p>
              <p>{Object.keys(users[item].answers).length} question answered</p>
              <p>{users[item].questions.length} question asked</p>
            </div>
            <div>
              <p>
                Score:{' '}
                {Object.keys(users[item].answers).length +
                  users[item].questions.length}
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});
export default connect(mapStateToProps)(Leaderboard);
