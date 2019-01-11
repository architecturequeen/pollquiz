import { combineReducers } from 'redux';
import { loggedInUser, users } from './user';
import { questions } from './questions';

export default combineReducers({ loggedInUser, users, questions });
