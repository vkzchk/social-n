import React from 'react';

import classes from './profileInfo.module.css'
import Preloader from '../../common/preloader/preloader'
import userPhoto from '../../../assets/images/user.png'
import ProfileStatus from './profile-status';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div>
      {/* <div>
        <img src="https://nc-img.com/pp/cms/home/images/banner.5094a77cba7d4290d128e702e88723a1.png" alt="" />
      </div> */}
      <div className={classes.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} alt="" />
        <div>Full name: {props.profile.fullName}</div>
        <ProfileStatus status={'Hello!!!!!!!'}/>
      </div>
    </div>
  );
}

export default ProfileInfo;