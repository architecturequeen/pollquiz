import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import LoginContainer from './LoginContainer';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route component={LoginContainer} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
