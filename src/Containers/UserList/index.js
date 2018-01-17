import { connect } from 'react-redux';
import UserList from './UserList';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(UserList);
