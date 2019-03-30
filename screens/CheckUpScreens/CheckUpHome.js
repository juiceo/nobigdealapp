import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content, Text, View } from 'native-base'
import { LinearGradient } from 'expo';

import Colors from '../../constants/Colors'

import Spacer from '../../components/Spacer'
import ScreenTitle from '../../components/ScreenTitle'
import Button from '../../components/Button'
import StyledText from '../../components/StyledText'

export default CheckUpHome = (props) => {

	function goToDone() {
		props.navigation.navigate('CheckUpHome')
	}

	function goToSymptomsUrinate() {
		props.navigation.navigate('CheckUpUrinate')
	}

	return (
		<Content contentContainerStyle={s.wrapper}>
			<Spacer size={106}></Spacer>
			<ScreenTitle title="How are you feeling?" subtitle="Just checking." titleColor={Colors.highlight} />
			<Spacer size={106}></Spacer>
			<Button text="Awesome!" fullWidth onPress={goToDone} />
			<Spacer size={10}></Spacer>
			<Button text="Not so great" type="border" fullWidth onPress={goToSymptomsUrinate} />
			<Spacer size={40}></Spacer>
			<Button text="Why are you asking me this?" type="text" fullWidth />
		</Content>
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