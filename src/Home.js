import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link> |<Link to="/create">Create New Poll</Link>|
        <Link to="/board">Leader Board</Link> |<button onClick>Logout</button>
        <span>Logged in As User X</span>
        <Route path="/" exact component={() => <div>Home</div>} />
        <Route path="/create/" component={() => <div>Create New Poll</div>} />
        <Route path="/board" component={() => <div>Leader Board</div>} />
      </div>
    );
  }
}

export default Home;
