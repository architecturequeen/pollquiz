import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            Login
            <Link to="/">Home</Link> |<Link to="/create">Create New Poll</Link>{' '}
            |<Link to="/board">Leader Board</Link> |<button>Logout</button>
            <span>Logged in As User X</span>
            <Route path="/" exact component={() => <div>Home</div>} />
            <Route
              path="/create/"
              component={() => <div>Create New Poll</div>}
            />
            <Route path="/board/" component={() => <div>Leader Board</div>} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
