import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content, Text, View } from 'native-base'
import { LinearGradient } from 'expo';

import Colors from '../../constants/Colors'

import Spacer from '../../components/Spacer'
import ScreenTitle from '../../components/ScreenTitle'
import Button from '../../components/Button'
import StyledText from '../../components/StyledText'

export default CheckUpScreenUrinate = (props) => {

	function goToChlamydia() {
		props.navigation.navigate('CheckUpChlamydia')
	}

	function goToDone() {
		props.navigation.navigate('CheckUpDone')
	}

	return (
		<Container style={s.wrapper}>
			<Content contentContainerStyle={s.wrapperInner}>
				<Spacer size={106} />
				<ScreenTitle subtitle="Track your symptoms" />
				<Spacer size={40} />
				<ScreenTitle title="Does it burn when you pee?" titleColor={Colors.highlight} />
				<Spacer size={80} />
				<Button text="Yes" fullWidth onPress={goToChlamydia} />
				<Spacer size={10} />
				<Button text="No" fullWidth type="border" onPress={goToDone} />
				<Spacer size={40}></Spacer>
				<Button text="Explain the question" type="text" fullWidth />
			</Content>
		</Container>
	)
}

const s = StyleSheet.create({
	wrapper: {
		padding: 20,
		paddingHorizontal: 40,
		justifyContent: 'center',
		alignItems: 'stretch'
	}
})