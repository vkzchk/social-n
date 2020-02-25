import React from 'react'
import Header from './header'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../redux/authReducer'
import { usersAPI } from '../../api/api'

class HeaderContainer extends React.Component {

  componentDidMount() {
    usersAPI
      .getLogin()
      .then(data => {
        if (data.resultCode === 0) {
          const { id, email, login } = data.data
          this.props.setAuthUserData(id, email, login)
        }
      })
  }
  render() {
    return (
      <Header {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)
