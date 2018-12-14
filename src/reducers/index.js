import { combineReducers } from 'redux';
import { loggedInUser, users} from './user';

export default combineReducers({ loggedInUser, users });
