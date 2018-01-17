import React from 'react';
import PropTypes from 'prop-types';

function Message ({ message, author }) {
  return (
    <p className={`message ${author === 'Me' ? 'mine' : 'others'}`}>
      <i>{author}</i><span>:</span> { message }
    </p>
  );
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Message;
