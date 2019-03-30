import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content, Text, View } from 'native-base'
import { LinearGradient } from 'expo';

import Colors from '../constants/Colors'

import Spacer from '../components/Spacer'
import ScreenTitle from '../components/ScreenTitle'
import Button from '../components/Button'
import StyledText from '../components/StyledText'

export default LatestDiagnosis = (props) => {

	function dismiss() {
		props.navigation.pop()
	}

	const { disease } = props.navigation.state.params

	return (
		<Container>
			<LinearGradient
				colors={['rgb(164,119,255)', 'rgb(27,14,142)']}
				style={{ flex: 1 }}
			>
				<Content contentContainerStyle={s.wrapper}>
					<Spacer size={80} />
					<StyledText text="Test result from 20.3.2019:" size="small" color={Colors.white} />
					<Spacer size={10} />
					<StyledText text={`You have ${disease}`} size="xlarge" color={Colors.white} />
					<Spacer size={10} />
					<StyledText text="But don't worry, it's easy to treat" size="med" color={Colors.white} />
					<Spacer size={20} />
					<View style={s.card}>
						<StyledText size="med" text="1. Get the treatment" />
						<Spacer size={10} />
						<StyledText size="xsmall" text="Your doctor has written you an eReceipt. You can pick it up from any pharmacy." />
						<Spacer size={10} />
						<Button type="text" text="Download eReceipt"></Button>
					</View>
					<Spacer size={20} />
					<View style={s.card}>
						<StyledText size="med" text="2. Inform your partner(s)" />
						<Spacer size={10} />
						<StyledText size="small" text="Don't let it spread! Informing your partners is the right thing to do. Click below to do it anonymously." />
						<Spacer size={10} />
						<Button type="text" text="Inform partners"></Button>
					</View>
					<Spacer size={20}></Spacer>
					<Button fullWidth text="Done" type="text" onPress={dismiss} />
				</Content>
			</LinearGradient>
		</Container>
	)
}

const s = StyleSheet.create({
	wrapper: {
		padding: 20,
		paddingHorizontal: 20,
		justifyContent: 'center',
		alignItems: 'stretch'
	},
	card: {
		backgroundColor: Colors.white,
		padding: 20,
		borderRadius: 5,
	}
})