import React from 'react';

import classes from './dialogs.module.css';
import DialogItem from './dialogItem/dialogItem';
import Message from './message/message';
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
  const state = props.dialogsPage

  const dialogsElements = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />)
  const messagesElements = state.messages.map(message => <Message key={message.id} message={message.message} />)

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageText)
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={classes.messages}>
        <div>
          {messagesElements}
        </div>
        <AddMessageFormRedux onSubmit={addNewMessage} />
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component="textarea" name="newMessageText" placeholder="Enter your message" />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;
