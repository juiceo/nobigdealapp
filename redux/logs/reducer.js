import * as ActionTypes from './actionTypes';
import _ from 'lodash';

const initialState = {
	logs: []
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SAVE_NEW_LOG: {

			const newLog = {
				...action.payload,
				timestamp: Date.now(),
				id: Math.random() * 10000000 + Date.now(),
			}

			return {
				...state,
				logs: _.concat(state.logs, newLog)
			}
		}
		case 'RESET_STORE': {
			return initialState;
		}
		default: return state
	}
}