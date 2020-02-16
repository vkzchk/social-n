import React from 'react';

import classes from './profileInfo.module.css'



const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://nc-img.com/pp/cms/home/images/banner.5094a77cba7d4290d128e702e88723a1.png" alt="" />
      </div>
      <div className={classes.descriptionBlock}>
        ava + description
        </div>
    </div>
  );
}

export default ProfileInfo;