import { connect } from 'react-redux';
import * as Data from './Data';
import { loadQuestions, logout } from './actions';
import Home from './Home';
import { withRouter } from 'react-router-dom';

const _loadQuestions = dispatch => {
  Data._getQuestions().then(questions => {
    dispatch(loadQuestions(questions));
  });
};

const _logout = dispatch => dispatch(logout());

const mapDispatchToProps = dispatch => ({
  loadQuestions: () => _loadQuestions(dispatch),
  logout: () => _logout(dispatch)
});

const mapStateToProps = state => ({
  users: state.users,
  loggedInUser: state.loggedInUser,
  questions: state.questions
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
