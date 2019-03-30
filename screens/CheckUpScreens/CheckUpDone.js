import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content, Text, View } from 'native-base'
import { LinearGradient } from 'expo';

import Colors from '../../constants/Colors'
import Spacer from '../../components/Spacer'
import ScreenTitle from '../../components/ScreenTitle'
import Button from '../../components/Button'
import StyledText from '../../components/StyledText'

export default CheckUpDone = (props) => {

	function onDone() {
		props.navigation.dismiss()
	}

	return (
		<Content>
			<Spacer size={106} />
			<ScreenTitle title="Sounds good!" subtitle="Looks like you're good to go" titleColor={Colors.highlight} />
			<Spacer size={106} />
			<Button text="Yay, OK" onPress={onDone}></Button>
		</Content>
	)
}