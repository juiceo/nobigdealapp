import React from 'react'

import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors';

import { Text } from 'native-base'

const StyledText = ({ text, color, size, align = 'center' }) => {


	const style = [
		styles.text,
		size === 'xsmall' ? styles.textXSmall : null,
		size === 'small' ? styles.textSmall : null,
		size === 'med' ? styles.textMed : null,
		size === 'large' ? styles.textLarge : null,
		size === 'xlarge' ? styles.textXLarge : null,
		align ? { textAlign: align } : null,
		color ? { color } : null
	]

	return (
		<Text style={style}>{text}</Text>
	)
}

const styles = StyleSheet.create({
	text: {
		fontWeight: 'bold',
		color: Colors.defaultText,
	},
	textXSmall: {
		fontSize: 14,
		lineHeight: 15,
		fontWeight: 'normal',
	},
	textSmall: {
		fontSize: 16,
		lineHeight: 18,
		fontWeight: '900',
	},
	textMed: {
		fontSize: 21,
		lineHeight: 25,
		fontWeight: '900',
	},
	textLarge: {
		fontSize: 32,
		lineHeight: 35,
		fontWeight: '900',
	},
	textXLarge: {
		fontSize: 40,
		lineHeight: 44,
		fontWeight: '900',
	}
})

export default StyledText