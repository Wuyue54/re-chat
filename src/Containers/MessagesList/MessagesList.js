import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

function MessagesList ({ messages }) {
  return (
    <section id="messages-list">
      <ul>
        {
          messages.map(message => (
            <Message
              key={message.id}
              message={message.message}
              author={message.author}
            />
          ))
        }
      </ul>
    </section>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default MessagesList;