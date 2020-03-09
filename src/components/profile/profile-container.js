import React from 'react';

import Profile from './profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getUserProfile, getUserStatus, updateStatus } from '../../redux/profileReducer'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 6097
    }
    this.props.getUserProfile(userId)
    this.props.getUserStatus(userId)
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  withRouter,
  //withAuthRedirect
)(ProfileContainer)
