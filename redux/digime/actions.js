import * as ActionTypes from './actionTypes';

export const setAppointmenBooked = () => dispatch => {
	dispatch({
		type: ActionTypes.SET_APPOINTMENT_BOOKED,
	})
}

export const setPrescription = () => dispatch => {
	dispatch({
		type: ActionTypes.SET_PRESCRIPTION,
	})
}

export const setTestResults = () => dispatch => {
	dispatch({
		type: ActionTypes.SET_TEST_RESULTS
	})
}

export const setConnected = () => dispatch => {
	dispatch({
		type: ActionTypes.SET_CONNECTED
	})
}

export const setFitbitData = () => dispatch => {
	dispatch({
		type: ActionTypes.SET_FITBIT_DATA
	})
}