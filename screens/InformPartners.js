import React, { Component } from 'react'

import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo'
import { Container, Content, Textarea, View } from 'native-base'

import Spacer from '../components/Spacer'
import StyledText from '../components/StyledText'
import Button from '../components/Button'
import Colors from '../constants/Colors'

import sendMessages from '../services/TwilioService';

const DEFAULT_MESSAGE = "A past sexual partner of yours has tested positive for Chlamydia. They wanted to let you know that you might have it too - please contact a doctor soon."

class InformPartners extends Component {

	constructor(props) {
		super(props)

		this.state = {
			customMessage: '',
		}
	}

	dismiss() {
		this.props.navigation.pop()
	}

	onSend() {
		// We could send text messages here, but the trial account only allows to send to pre-verified phone numbers so 
		// we've commented it out.
		const baseMessage = this.state.customMessage || DEFAULT_MESSAGE
		const signature = ' This message was sent anonymously via NoBigDeal.';
		sendMessages('+358442419719', baseMessage + signature);

		this.props.navigation.navigate('InformPartnersDone', {
			loadingText: 'Delivering message',
			doneText: 'Message sent!',
			doneSubtitle: 'Your previous partner(s) have been informed - thanks for being responsible.',
			onClose: (navigation) => navigation.pop(),
		})
	}

	render() {
		return (
			<Container>
				<LinearGradient
					colors={['rgb(164,119,255)', 'rgb(27,14,142)']}
					style={{ flex: 1 }}
				>
					<Content contentContainerStyle={s.wrapper}>
						<Spacer size={80} />
						<StyledText text="Inform your partner(s)" size="xlarge" color={Colors.white} />
						<Spacer size={10} />
						<StyledText text={"This will be anonymous"} size="small" color={Colors.cyan} />
						<Spacer size={20} />
						<View style={s.card}>
							<StyledText size="med" text="Use a default message" />
							<Spacer size={10} />
							<StyledText size="xsmall" text={DEFAULT_MESSAGE} />
							<Spacer size={10} />
							<Button text="Send" onPress={() => this.onSend()}></Button>
						</View>
						<Spacer size={20} />
						<View style={s.card}>
							<StyledText size="med" text="Or write your own" />
							<Spacer sizse={10} />
							<Textarea rowSpan={5} bordered placeholder="Type a message" value={this.state.customMessage} onChangeText={(value) => this.setState({ customMessage: value })} />
							{this.state.customMessage ? <Spacer size={10} /> : null}
							{this.state.customMessage ? <Button text="Send" onPress={() => this.onSend()}></Button> : null}
						</View>
						<Spacer size={20}></Spacer>
						<Button fullWidth text="Done" type="text" onPress={() => this.dismiss()} />
					</Content>
				</LinearGradient>
			</Container>
		)
	}
}

const s = StyleSheet.create({
	wrapper: {
		padding: 20,
	},
	card: {
		padding: 10,
		backgroundColor: Colors.white,
		borderRadius: 10,
	}
})

export default InformPartners