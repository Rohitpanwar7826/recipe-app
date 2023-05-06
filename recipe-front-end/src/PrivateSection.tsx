import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {useNavigate, useLocation} from "react-router-dom"
import Loader from './components/shared/Loader';

const PrivateSection = (props: any) => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if(!props.loggedIn){
      // errorMessageLight("You need to sign-in before continue.")
      navigate("/login")
    }
  }, [props.loggedIn])
  if(props.userLoading) return < Loader />
  return props.loggedIn ? < props.element /> : null
}

const mapStateToprops = (state: any) => ({
  hasToken: state.auth.hasToken,
  loggedIn: state.auth.isLogged,
  userLoading: state.user.loading
})
export default connect(mapStateToprops)(PrivateSection)