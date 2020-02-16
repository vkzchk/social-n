const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCount: 30 },
    { id: 2, message: 'Hello', likesCount: 10 },
    { id: 3, message: 'Meooow', likesCount: 5 },
  ],
  newPostText: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
        let newPost = {
          id: 5,
          message: state.newPostText,
          likesCount: 0
        }
        return {
          ...state,
          posts: [...state.posts, newPost],
          newPostText: ''
        }
    case UPDATE_NEW_POST_TEXT:
        return {
          ...state,
          newPostText: action.newText
        }

    default:
      return state
  }

}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}

export default profileReducer