import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { logOutUser } from '../Actions/userActions'
import { Redirect } from 'react-router-dom'

export const Logout = (props) => {

  const logOut = () => props.logout()
  useEffect(() => {
    logOut()
  })

  // const handleLogout = () => {
  //   props.logout()
  // }

  return (
    <Redirect to="/" />
      )
  }


const mapStateToProps = (state) => {
    return {
        isloggedIn: state.users.isLoggedIn
    }
    
}


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {dispatch(logOutUser())}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
