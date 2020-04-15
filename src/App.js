import React, { Component } from "react";
import NetworkDetector from './HOC/NetworkDetector'
import { connect } from 'react-redux';
import { renderRoutes } from "react-router-config";
import { Link } from 'react-router-dom'
import { LOGOUT, LOGIN } from './store/actions/actions';
import './App.css';

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
      <div className="App">
        <ul>
          <li>
            <Link to="/">User</Link>
          </li>
          <li>
            <Link to="/city">City</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            
          </li>
        </ul>
        <div style={{padding: '10px'}}>
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