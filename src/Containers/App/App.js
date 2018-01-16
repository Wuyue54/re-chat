import React, { Component } from 'react';
import './App.css';

import UserList from '../UserList';
import MessagesList from '../MessagesList';
import Send from '../Send';

class App extends Component {
  render() {
    return (
      <div id="container">
        <UserList />
        <section id="main">
          <MessagesList />
          <Send />
        </section>
      </div>
    );
  }
}

export default App;
