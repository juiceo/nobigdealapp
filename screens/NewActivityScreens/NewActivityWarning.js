import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { Container, Content, Text, View } from 'native-base'
import { connect } from 'react-redux';
import { LinearGradient } from 'expo';

import Colors from '../../constants/Colors'

import Spacer from '../../components/Spacer'
import ScreenTitle from '../../components/ScreenTitle'
import Button from '../../components/Button'
import StyledText from '../../components/StyledText'
import AppLogo from '../../components/AppLogo';

import * as DigimeActions from '../../redux/digime/actions';

const NewActivityWarning = (props) => {

	function dismiss() {
		props.navigation.dismiss()
	}

	function orderMedsScreen() {
		props.setPrescription();
		props.navigation.navigate('NewActivityOrder', {
			loadingText: 'Placing order',
			doneText: 'Order placed',
			doneSubtitle: "You should receive a package with your products within 2-3 business days"
		})
	}

	return (
		<Container>
			<LinearGradient
				colors={['rgb(164,119,255)', 'rgb(27,14,142)']}
				style={{ flex: 1 }}
			>
				<Content contentContainerStyle={s.wrapper}>
					<Spacer size={106} />
					<StyledText text="Oops! There can be up to a" size="med" color={Colors.white} />
					<Spacer size={10} />
					<StyledText text="30% risk" size="large" color={Colors.white} />
					<Spacer size={10} />
					<StyledText text="of getting pregnant from unprotected sex." size="med" color={Colors.white} />
					<Spacer size={20} />
					<StyledText size="small" color={Colors.white} text="But don't worry, it happens. In case pregnancy isn't what you're looking for right now, you have a few options:" />
					<Spacer size={20} />
					<View style={s.card}>
						<StyledText size="med" text="1. Get a morning after pill" />
						<Spacer size={10} />
						<StyledText size="xsmall" text="This is the easiest way to prevent an unwanted pregancy if taken within 72 hours after intercourse. The nearest pharmacy to you is" />
						<Spacer size={5} />
						<StyledText size="small" text="Yliopiston Apteekki Töölö" />
						<Spacer size={20} />
						<View style={s.buttonRow}>
							<Button fullWidth type="border" text="See on map"></Button>
						</View>
					</View>
					<Spacer size={20} />
					<View style={s.card}>
						<StyledText size="med" text="2. Order a pregnancy test" />
						<Spacer size={10} />
						<StyledText size="xsmall" text="If it's been over 72 hours, you should start regularly testing yourself for pregnancy." />
						<Spacer size={10} />
						<StyledText size="small" text="Price: 23,45€" color={Colors.purple} />
						<Spacer size={5} />
						<StyledText size="small" text="Yliopiston Apteekki Töölö" />
						<Spacer size={20} />
						<View style={s.buttonRow}>
							<Button fullWidth text="Order online" onPress={orderMedsScreen}></Button>
						</View>
					</View>
					<Spacer size={20} />
					<Button fullWidth text="Done" type="text" color={Colors.white} onPress={dismiss} />
					<Spacer size={40} />
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

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
	setPrescription: () => dispatch(DigimeActions.setPrescription())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewActivityWarning)