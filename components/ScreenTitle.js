import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base'
import Colors from '../constants/Colors'
import Spacer from './Spacer'
import StyledText from './StyledText'

export default class ScreenTitle extends Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		titleColor: PropTypes.string,
		subtitle: PropTypes.string
	}

	static defaultProps = {
		titleColor: Colors.textDefault,
	}

	render() {
		const { title, subtitle, titleColor } = this.props

		const titleStyle = [s.title, { color: titleColor }]

		return (
			<View style={s.wrapper}>
				<StyledText text={title} size='large' />
				<Spacer size={20} />
				<StyledText text={subtitle} size='med' />
			</View>
		)
	}
}

const s = StyleSheet.create({
	wrapper: {
		flexDirection: 'column',
		alignItems: 'center',
	},
})

