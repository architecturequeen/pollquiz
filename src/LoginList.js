import { connect } from 'react-redux';
import * as Data from './Data';
import { login, loadUsers } from './actions';
import Login from './Login';

const _loadUsers = dispatch => {
  Data._getUsers().then(users => {
    dispatch(loadUsers(users));
  });
};

const mapDispatchToProps = dispatch => ({
  login: id => dispatch(login(id)),
  loadUsers: () => _loadUsers(dispatch)
});

const mapStateToProps = state => ({
  users: state.users,
  loggedInUser: state.loggedInUser
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
