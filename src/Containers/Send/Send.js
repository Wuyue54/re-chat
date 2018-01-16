import React from 'react';
import PropTypes from 'prop-types';

function Send ({ send }) {
  let input;
  return (
    <section id="new-message">
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
    </section>
  );
}

Send.propTypes = {
  send: PropTypes.func.isRequired
};

export default Send;
