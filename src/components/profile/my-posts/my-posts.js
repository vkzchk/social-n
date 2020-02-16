import React from 'react';
import classes from './my-posts.module.css';
import Post from './post/post';


const MyPosts = (props) => {

  const postsElements = props.posts.map(post => <Post key={ post.id } message={ post.message } likesCount={ post.likesCount } />)
  const newPostText = props.newPostText;

  const onAddPost = () => {
    props.addPost()
  }

  const onPostChange = (e) => {
    props.updateNewPostText(e.target.value)
  }

  return (
    <div className={ classes.postsBlock }>
      <div>
        <h3>My Posts</h3>
        <div>
          <div>
            <textarea onChange={ onPostChange }  cols="30" rows="5" value={ newPostText } />
          </div>
          <div>
            <button onClick={ onAddPost }>Add post</button>
          </div>
        </div>

        <div className={ classes.posts }>
          { postsElements }
        </div>
      </div>
    </div>
  );
}

export default MyPosts;