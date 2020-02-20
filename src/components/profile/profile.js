import React from 'react';

import classes from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo'
import MyPostsContainer from './my-posts/my-posts-container';

const Profile = (props) => {

  return (
    <div className={classes.profile}>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;