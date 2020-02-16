import React from 'react';

import classes from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo'
import MyPostsContainer from './my-posts/my-posts-container';

const Profile = () => {

  return (
    <div className={classes.profile}>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
}

export default Profile;