import { combineReducers } from 'redux';
import taskReduser from './taskReduser';


export default combineReducers({
    task:taskReduser
});