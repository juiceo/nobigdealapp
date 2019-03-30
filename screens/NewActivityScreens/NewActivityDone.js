import React from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content } from 'native-base'
import ScreenTitle from '../../components/ScreenTitle'
import Spacer from '../../components/Spacer'
import Button from '../../components/Button'

const NewActivityDone = (props) => {

	function dismiss() {
		props.navigation.dismiss();
	}

	return (
		<Container style={s.wrapper}>
			<Content contentContainerStyle={s.submittedWrapper}>
				<ScreenTitle title="Thanks!" subtitle="You're a boss" />
				<Spacer size={40} />
				<Button text="Close" onPress={dismiss} />
			</Content>
		</Container>
	)
}

const s = StyleSheet.create({
	wrapper: {
		padding: 20,
	},
	submittedWrapper: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	}
})

export default NewActivityDone