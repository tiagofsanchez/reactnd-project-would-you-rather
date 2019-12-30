import { combineReducers } from "redux"
import  questions  from './questions';
import  users  from './users';
import authUser  from './authUser';

export default combineReducers ({ 
    authUser, 
    questions, 
    users
})