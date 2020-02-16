import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import Dialogs from './dialogs';

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => dispatch(updateNewMessageTextActionCreator(text)),
    sendMessage: () => dispatch(addMessageActionCreator())
  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;