import React, { Component } from "react";
import NetworkDetector from './HOC/NetworkDetector'
import { connect } from 'react-redux';
import { renderRoutes } from "react-router-config";
import { Link } from 'react-router-dom'
import { LOGOUT, LOGIN } from './store/actions/actions';

class App extends Component{
  handleLogin = () => {
    this.props.dispatch({ type: LOGIN })
  }
  handleLogout = () => {
    this.props.dispatch({ type: LOGOUT });
  }
  render(){
    const { route, isUserLogin } = this.props
    let showLoginLogoutBtn = ''
    if(isUserLogin){
      showLoginLogoutBtn = <button onClick= { this.handleLogout }>logout</button>
    }else
    {
      showLoginLogoutBtn = <button onClick={ this.handleLogin } >Login</button>
    }
    return(
      <div>
        <h3>Header Page</h3>
        <ul>
          <li>
            <Link to="/">City</Link>
          </li>
          <li>
            <Link to="/users">User</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
        <div>
          {showLoginLogoutBtn}
        </div>
        {renderRoutes(route.routes)}
      </div>
    )
  }
}  


const mapStateToProps = ({ auth }) => {
  return {
    isUserLogin: auth.isUserLogin
  }
}



export default {
  component:connect(mapStateToProps, null)(NetworkDetector(App))
}