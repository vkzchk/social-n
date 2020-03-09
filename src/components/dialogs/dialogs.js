import React from 'react';

import classes from './dialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';

const Dialogs = (props) => {
  const state = props.dialogsPage

  const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
  const messagesElements = state.messages.map(message => <Message key={message.id} message={message.message} />)
  const newMessageText = state.newMessageText;


  const sendMessage = () => {
    props.sendMessage()
  }

  const onMessageChange = (e) => {
    let text = e.target.value
    props.updateNewMessageText(text)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div>
          <div>
            <textarea onChange={onMessageChange} cols="30" rows="5" value={newMessageText} placeholder="Enter your message" />
          </div>
          <div>
            <button onClick={sendMessage} >Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;