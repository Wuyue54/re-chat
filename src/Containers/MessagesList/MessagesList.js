import React from 'react';
import PropTypes from 'prop-types';
import Message from './Message';

function MessagesList ({ messages }) {
  return (
    <div className="messagesList">
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
    </div>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default MessagesList;
