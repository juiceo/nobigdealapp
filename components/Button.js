import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'native-base'

import Colors from '../constants/Colors'
import StyledText from './StyledText'

export default class Button extends Component {
	static propTypes = {
		onPress: PropTypes.func,
		text: PropTypes.string,
		fullWidth: PropTypes.bool,
		type: PropTypes.string,
	}

	static defaultProps = {
		fullWidth: false,
	}

	render() {


		const wrapperStyle = [
			s.wrapper,
			this.props.fullWidth ? s.wrapperFullWidth : null,
			this.props.type === 'text' ? s.wrapperText : null,
		]

		const buttonStyle = [
			s.button,
			this.props.type === 'border' ? s.buttonBordered : null,
			this.props.type === 'text' ? s.buttonText : null,
		]

		const textColor = this.props.type === 'border' || this.props.type === 'text' ? Colors.highlight : Colors.white

		return (
			<View style={wrapperStyle}>
				<TouchableOpacity style={buttonStyle} onPress={this.props.onPress}>
					<StyledText text={this.props.text} color={textColor} size="small" />
				</TouchableOpacity>
			</View>
		)
	}
}

const s = StyleSheet.create({
	wrapper: {
		height: 50,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	wrapperFullWidth: {
		alignItems: 'stretch',
	},
	wrapperText: {
		height: 'auto',
	},
	button: {
		paddingHorizontal: 40,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.highlight,
		flex: 1,
		borderRadius: 5,
	},
	buttonBordered: {
		backgroundColor: Colors.white,
		borderColor: Colors.highlight,
		borderWidth: 1,
	},
	buttonText: {
		backgroundColor: 'transparent',
	},
})