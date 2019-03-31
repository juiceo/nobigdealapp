import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'

import { Container, Content, Text, View } from 'native-base'
import { LinearGradient } from 'expo';

import Colors from '../constants/Colors'

import Spacer from '../components/Spacer'
import ScreenTitle from '../components/ScreenTitle'
import Button from '../components/Button'
import StyledText from '../components/StyledText'

export default DiagnosisClean = (props) => {

	function dismiss() {
		props.navigation.pop()
	}

	return (
		<Container>
			<LinearGradient
				colors={['rgb(164,119,255)', 'rgb(27,14,142)']}
				style={{ flex: 1 }}
			>
				<Content contentContainerStyle={s.wrapper}>
					<Spacer size={80} />
					<View style={s.card}>
						<Image source={require('../assets/images/group.png')} style={{ width: 130, height: 130, resizeMode: 'contain' }} />
						<Spacer size={40} />
						<StyledText text="You're good to go!" size="xlarge" />
						<Spacer size={20} />
						<StyledText text="All your test results came out negative" />
						<Spacer size={60} />
						<StyledText text="Tested 22.3.2019 (9 days ago)" size="xsmall" />
					</View>
					<Spacer size={20} />
					<Button fullWidth text="Close" type="text" onPress={dismiss} />
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
		padding: 40,
		borderRadius: 5,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
	}
})