import Users from './users'
import { connect } from 'react-redux'
import { followAC, unFollowAC, setUsersAC } from '../../redux/usersReducer';

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}
const mapDispatchtoProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followAC(userId)),
    unfollow: (userId) => dispatch(unFollowAC(userId)),
    setUsers: (users) => dispatch(setUsersAC(users))
  }
}

export default connect(mapStateToProps, mapDispatchtoProps)(Users)