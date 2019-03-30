import * as ActionTypes from './actionTypes';

export const saveNewLog = () => dispatch => {
	dispatch({
		type: ActionTypes.SAVE_NEW_LOG,
	})
}