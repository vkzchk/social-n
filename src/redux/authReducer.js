import { usersAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

const initialState = {
  id: null,
  email: null,
  login: null,
  IsFetching: false,
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const authUserData = () => (dispatch) => {
  usersAPI
    .getLogin()
    .then(data => {
      if (data.resultCode === 0) {
        const { userId, email, login } = data.data
        dispatch(setAuthUserData(userId, email, login))
      }
    })
}

export default authReducer
