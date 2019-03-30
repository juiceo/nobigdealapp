import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content, Text, View } from 'native-base'
import { LinearGradient } from 'expo';

import Colors from '../../constants/Colors'

import Spacer from '../../components/Spacer'
import ScreenTitle from '../../components/ScreenTitle'
import Button from '../../components/Button'
import StyledText from '../../components/StyledText'

export default CheckUpScreenChlamydia = (props) => {

	function dismiss() {
		props.navigation.dismiss()
	}

	return (
		<Container>
			<LinearGradient
				colors={['rgb(164,119,255)', 'rgb(27,14,142)']}
				style={{ flex: 1 }}
			>
				<Content contentContainerStyle={s.wrapper}>
					<Spacer size={106} />
					<StyledText text="You may have" size="med" color={Colors.white} />
					<Spacer size={10} />
					<StyledText text="Chlamydia" size="large" color={Colors.white} />
					<Spacer size={20} />
					<StyledText text="Just to be sure:" size="med" color={Colors.cyan} />
					<Spacer size={20} />
					<View style={s.card}>
						<StyledText size="med" text="Go to the doctor" />
						<Spacer size={10} />
						<StyledText size="xsmall" text="Next available time" />
						<Spacer size={5} />
						<StyledText size="small" text="Today 12:00 Aava Kamppi" />
						<Spacer size={20} />
						<View style={s.buttonRow}>
							<Button fullWidth type="border" text="See other times"></Button>
							<Spacer size={10} />
							<Button fullWidth text="Book"></Button>
						</View>
					</View>
					<Spacer size={20} />
					<View style={s.card}>
						<StyledText size="med" text="Order a test online?" />
						<Spacer size={10} />
						<StyledText size="small" text="Price 23,45€" color={Colors.purple} />
						<Spacer size={10} />
						<Button fullWidth text="Book now"></Button>
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