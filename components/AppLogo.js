import React from 'react'
import { View, StyleSheet, Image } from 'react-native';

const AppLogo = ({ isLight = true, right }) => {

	const logoLight = require('../assets/images/nbdLogo06.png');
	const logoDark = require('../assets/images/nbdLogo05.png');

	return (
		<View style={[s.wrapper, { right: right ? right : 0 }]}>
			<Image source={isLight ? logoLight : logoDark} style={s.logo} />
		</View>
	)
}

const s = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		top: 0,
		right: 0,
		paddingTop: 24,
	},
	logo: {
		width: 60,
		resizeMode: 'contain',
	}
})

export default AppLogo