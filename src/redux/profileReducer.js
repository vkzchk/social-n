import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCount: 30 },
    { id: 2, message: 'Hello', likesCount: 10 },
    { id: 3, message: 'Meooow', likesCount: 5 },
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = action.newPostText
      return {
        ...state,
        posts: [...state.posts, { id: 4, message: newPost, likesCount: 0 }],
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    default:
      return state
  }

}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
const setUserStatus = (status) => ({ type: SET_STATUS, status })
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI
    .getProfile(userId)
    .then(response => {
      dispatch(setUserProfile(response.data))
    })
}

export const getUserStatus = (userId) => (dispatch) => {
  profileAPI
    .getStatus(userId)
    .then(response => {
      dispatch(setUserStatus(response.data))
    })
}

export const updateStatus = (status) => (dispatch) => {
  profileAPI
    .updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }

    })
}

export default profileReducer