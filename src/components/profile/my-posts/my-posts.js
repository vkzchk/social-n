import React from 'react';
import classes from './my-posts.module.css';
import Post from './post/post';
import { reduxForm, Field } from 'redux-form';


const MyPosts = (props) => {

  const postsElements = props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />)

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={classes.postsBlock}>
      <div>
        <h3>My Posts</h3>
        <AddNewPostReduxForm onSubmit={onAddPost} />
        <div className={classes.posts}>
          {postsElements}
        </div>
      </div>
    </div>
  );
}

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" placeholder="Enter your message" name="newPostText" />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const AddNewPostReduxForm = reduxForm({ form: 'profileAddNewPostForm' })(AddNewPostForm)

export default MyPosts;