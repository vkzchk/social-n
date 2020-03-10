const SEND_MESSAGE = 'SEND-MESSAGE'

const initialState = {
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
  ]
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = action.newMessageText
      return {
        ...state,
        messages: [...state.messages, { id: 4, message: newMessage }],
      }
    default:
      return state
  }
}

export const addMessageActionCreator = (newMessageText) => ({ type: SEND_MESSAGE, newMessageText })

export default dialogsReducer
