import React from 'react';
import PropTypes from 'prop-types';

function UserList ({ users }) {
  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </aside>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default UserList;