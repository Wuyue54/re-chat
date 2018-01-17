import React from 'react';
import PropTypes from 'prop-types';

function Send ({ send }) {
  let input;
  return (
    <div className="sendMessageBox">
      <h3>Type here:</h3>
      <input
        onKeyPress={(e) => {
        if (e.key === 'Enter') {
          send(input.value, 'Me');
          input.value = '';
        }
      }}
        type="text"
        ref={(node) => {
        input = node;
      }}
      />
    </div>
  );
}

Send.propTypes = {
  send: PropTypes.func.isRequired
};

export default Send;
