import React from 'react';

import Profile from './profile';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import { getUserProfile } from '../../redux/profileReducer'

class ProfileContainer extends React.Component {

  componentDidMount() {

    let userId = this.props.match.params.userId
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }

  render() {
    if (!this.props.isAuth) {
      return <Redirect to={'/login'} />
    }
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent);
