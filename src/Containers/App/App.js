import React from 'react';
import './App.css';

import UserList from '../UserList';
import MessagesList from '../MessagesList';
import Send from '../Send';

function App () {
  return (
    <div className="container">
      <UserList />
      <section className="main">
        <MessagesList />
        <Send />
      </section>
    </div>
  );
}

export default App;
