import * as ActionTypes from './actionTypes';

const initialState = {
	appointment: false,
	testResults: false,
	prescription: false,
	connected: false,
	fitbitData: false,
}

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.SET_APPOINTMENT_BOOKED: {
			return {
				...state,
				appointment: true,
			}
		}
		case ActionTypes.SET_TEST_RESULTS: {
			return {
				...state,
				testResults: true,
			}
		}
		case ActionTypes.SET_PRESCRIPTION: {
			return {
				...state,
				prescription: true,
			}
		}
		case ActionTypes.SET_CONNECTED: {
			return {
				...state,
				connected: true,
			}
		}
		case ActionTypes.SET_FITBIT_DATA: {
			return {
				...state,
				fitbitData: true,
			}
		}
		case 'RESET_STORE': {
			return initialState;
		}
		default: return state;
	}
}