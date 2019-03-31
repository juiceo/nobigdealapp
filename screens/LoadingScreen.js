import React from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Container, Content } from 'native-base';
import { LinearGradient } from 'expo';
import Colors from '../constants/Colors'
import StyledText from '../components/StyledText';
import Spacer from '../components/Spacer';
import Button from '../components/Button'

class LoadingScreen extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			loading: true,
		}
	}

	componentDidMount() {
		setTimeout(function () {
			this.setState({
				loading: false
			})
		}.bind(this), 2000)
	}

	onClose() {
		const { onClose } = this.props.navigation.state.params;
		if (onClose) {
			onClose(this.props.navigation)
		} else {
			this.props.navigation.dismiss()
		}
	}

	render() {

		const { loadingText, doneText, doneSubtitle } = this.props.navigation.state.params

		return (
			<Container>
				<LinearGradient
					colors={['rgb(164,119,255)', 'rgb(27,14,142)']}
					style={{ flex: 1 }}
				>
					<Content contentContainerStyle={s.wrapper}>
						<Spacer size={106} />
						{this.state.loading ? (
							<React.Fragment>
								<StyledText text={loadingText} size="med" color={Colors.white} />
								<Spacer size={20} />
								<ActivityIndicator color={Colors.white} />
							</React.Fragment>
						) : (
								<React.Fragment>
									<StyledText text={doneText} size="large" color={Colors.white} />
									<Spacer size={20} />
									<StyledText text={doneSubtitle} color={Colors.white} />
									<Spacer size={20} />
									<Button text="Close" onPress={() => this.onClose()} />
								</React.Fragment>
							)}
					</Content>
				</LinearGradient>
			</Container>
		)
	}
}

const s = StyleSheet.create({
	wrapper: {
		padding: 20,
		flexDirection: 'column',
		alignItems: 'center',
	}
})

export default LoadingScreen;