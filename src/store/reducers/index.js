import { combineReducers } from 'redux';
import userReducer from './userReducer';
import Auth from './Auth';

export default combineReducers({ users: userReducer, auth: Auth });