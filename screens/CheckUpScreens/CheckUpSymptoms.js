import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content, Text, View } from 'native-base'
import { LinearGradient } from 'expo';

import Colors from '../../constants/Colors'

import Spacer from '../../components/Spacer'
import ScreenTitle from '../../components/ScreenTitle'
import Button from '../../components/Button'
import StyledText from '../../components/StyledText'

export default class CheckUpSymptoms extends Component {

	constructor(props) {
		super(props);

		this.state = {
			one: false,
			two: false,
			three: false,
			four: false,
		}

		this.goToNext = this.goToNext.bind(this);
	}


	goToNext() {
		this.props.navigation.navigate('CheckUpSymptomsTwo')
	}

	render() {

		const { one, two, three, four } = this.state;

		return (
			<Container style={s.wrapper} >
				<Content contentContainerStyle={s.wrapperInner}>
					<Spacer size={106} />
					<StyledText size="med" text="Have you experienced any of these symptoms?" />
					<Spacer size={20} />
					<StyledText size="large" text="Select all that apply" />
					<Spacer size={40} />
					<Button text="Weird smell when urinating" fullWidth type={one ? null : 'border'} onPress={() => this.setState({ one: !one })} />
					<Spacer size={10} />
					<Button text="Unusual vaginal discharge" fullWidth type={two ? null : 'border'} onPress={() => this.setState({ two: !two })} />
					<Spacer size={10} />
					<Button text="It hurts when I urinate" fullWidth type={three ? null : 'border'} onPress={() => this.setState({ three: !three })} />
					<Spacer size={10} />
					<Button text="Fever or abdominal pain" fullWidth type={four ? null : 'border'} onPress={() => this.setState({ four: !four })} />
					<Spacer size={40} />
					<Button text="Continue" fullWidth type="text" onPress={this.goToNext} />
				</Content>
			</Container>
		)
	}
}

const s = StyleSheet.create({
	wrapper: {
		padding: 20,
		paddingHorizontal: 40,
		justifyContent: 'center',
		alignItems: 'stretch'
	}
})