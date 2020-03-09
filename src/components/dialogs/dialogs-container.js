import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';
import Dialogs from './dialogs';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs)
