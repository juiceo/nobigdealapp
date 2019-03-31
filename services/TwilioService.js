import axios from 'axios';
import qs from 'qs';

const URL = 'https://api.twilio.com/2010-04-01/Accounts/Messages.json';
const AccountSID = '<YourAccountSIDHere>';
const AuthToken = '<YourAuthTokenHere>';
const SenderNumber = '<YourSenderHere>';

export default sendMessages = (to, message) => {
	console.warn('SMS disabled, see TwilioService.js')
	// axios({
	// 	method: 'post',
	// 	url: 'https://api.twilio.com/2010-04-01/Accounts/' + AccountSID + '/Messages.json',
	// 	data: qs.stringify({
	// 		From: SenderNumber,
	// 		Body: message,
	// 		To: to,
	// 	}),
	// 	headers: {
	// 		'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
	// 	},
	// 	auth: {
	// 		username: AccountSID,
	// 		password: AuthToken
	// 	}
	// }).then((res) => {
	// 	console.log('Sent messages')
	// }).catch(error => {
	// 	console.log('Error sending msgs', error);
	// })
}