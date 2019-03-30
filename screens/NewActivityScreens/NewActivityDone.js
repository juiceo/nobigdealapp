import React from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content } from 'native-base'
import { LinearGradient } from 'expo';
import ScreenTitle from '../../components/ScreenTitle'
import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import StyledText from '../../components/StyledText';
import Colors from '../../constants/Colors';

const NewActivityDone = (props) => {

	function dismiss() {
		props.navigation.dismiss();
	}

	return (
		<Container>
			<LinearGradient
				colors={['rgb(50,205,50)', 'rgb(27,14,142)']}
				style={{ flex: 1 }}
			>
				<Content contentContainerStyle={s.submittedWrapper}>
					<StyledText size="xlarge" color={Colors.white} text="Thanks" />
					<StyledText size="med" color={Colors.white} text="For having sex responsibly. You're a boss!" />
					<Spacer size={40} />
					<Button text="Close" onPress={dismiss} />
				</Content>
			</LinearGradient>
		</Container>
	)
}

const s = StyleSheet.create({
	submittedWrapper: {
		padding: 20,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	}
})

export default NewActivityDone