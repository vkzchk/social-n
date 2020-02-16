import React from 'react';

import classes from './post.module.css';



const Post = (props) => {

  return (
    <div className={classes.item}>
      <img src="https://www.shankarainfra.com/img/avatar.png" alt="" />
      {props.message}
      <div>
        <span>like {props.likesCount}</span>
      </div>
    </div>
  );
}

export default Post;