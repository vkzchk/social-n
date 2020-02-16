import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

let store = {
  _state: {

    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you', likesCount: 30 },
        { id: 2, message: 'Hello', likesCount: 10 },
        { id: 3, message: 'Meooow', likesCount: 5 },
      ],
      newPostText: ''
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Tom' },
        { id: 4, name: 'Andrew' },
        { id: 5, name: 'Kate' }
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hello' },
        { id: 3, message: 'How are you?' }
      ],
      newMessageText: ''
    },
    sideBar: {
      friends: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Kate' }
      ]
    }
  },
  _callSubscriber() {
    console.log('state is changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sideBar = sidebarReducer(this._state.sideBar, action)
    this._callSubscriber(this._state)
  }
}

export default store
