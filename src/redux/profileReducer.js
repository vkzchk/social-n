const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCount: 30 },
    { id: 2, message: 'Hello', likesCount: 10 },
    { id: 3, message: 'Meooow', likesCount: 5 },
  ],
  newPostText: '',
  profile: null
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
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

export const setUserProfile =(profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  }
}

export default profileReducer