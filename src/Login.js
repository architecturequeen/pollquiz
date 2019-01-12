import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';

class Login extends Component {
  state = {
    selectedUser: ''
  };

  componentWillMount() {
    this.props.loadUsers();
  }

  handleChange = event => {
    this.selectedUser.value = event.target.value;
    this.setState({ selectedUser: event.target.value });
  };

  handleLogin = event => {
    this.props.login(this.selectedUser.value);
  };

  render() {
    const { users, loggedInUser } = this.props;
    return loggedInUser !== null ? (
      <HomeContainer />
    ) : (
      <div>
        <p>Login to Poll App!</p>
        <select
          value={this.state.selectedUser}
          ref={value => (this.selectedUser = value)}
          onChange={this.handleChange}
        >
          {Object.keys(users).map(username => (
            <option value={username} key={username}>
              {users[username].name}
            </option>
          ))}
        </select>
        <div>
          <button onClick={this.handleLogin}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
