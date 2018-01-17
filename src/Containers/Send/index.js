import { connect } from 'react-redux';
import uuid from 'uuid/v1';
import Send from './Send';
import { addMessage } from '../App/actions';


const mapDispatchToProps = dispatch => ({
  send: (message, author) => {
    dispatch(addMessage(message, author, uuid()));
  }
});

export default connect(null, mapDispatchToProps)(Send);
