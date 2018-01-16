import { connect } from 'react-redux';
import Send from './Send';
import { addMessage } from '../App/actions';

const mapDispatchToProps = dispatch => ({
  send: (message, author) => {
    console.log(message);
    dispatch(addMessage(message, author));
  }
});

export default connect(null, mapDispatchToProps)(Send);
