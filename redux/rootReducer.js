import { combineReducers } from 'redux';

import logs from './logs/reducer'
import digime from './digime/reducer'

export default combineReducers({
	logs,
	digime
});