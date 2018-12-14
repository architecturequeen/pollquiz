import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import LoginList from './LoginList';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <LoginList />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
