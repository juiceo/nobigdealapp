import React from 'react';

import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Container, Content, Item, Label, Input } from 'native-base';

import * as LogActions from '../../redux/logs/actions';
import * as DigimeActions from '../../redux/digime/actions';
import TextRadioButtons from '../../components/TextRadioButtons'
import ScreenTitle from '../../components/ScreenTitle'
import Spacer from '../../components/Spacer'
import Button from '../../components/Button'
import StyledText from '../../components/StyledText';
import Colors from '../../constants/Colors';
import AppLogo from '../../components/AppLogo';

class NewActivityHome extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			condomUsed: null,
			birthControl: null,
			phoneNumber: '',
			types: [],
			under72hrs: null,
		}

		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit() {
		this.props.setFitbitData();
		this.props.saveNewLog(_.pick(this.state, ['condomUsed', 'birthControl', 'types', 'phoneNumber']));

		if (this.state.condomUsed !== 'yes' && this.state.birthControl !== 'yes') {
			this.props.navigation.navigate('NewActivityWarning')
		} else {
			this.props.navigation.navigate('NewActivityDone')
		}
	}

	render() {

		const { condomUsed, birthControl, types } = this.state;

		const showUnder72Hrs = condomUsed && condomUsed !== 'yes' && birthControl && birthControl !== 'yes';

		const buttonDisabled = !condomUsed || !birthControl || types.length === 0

		return (
			<Container style={s.wrapper}>
				<Content>
					<Spacer size={106} />
					<StyledText text="I just had sex." color={Colors.blue} size="xlarge" align="left" />
					<Spacer size={40} />
					<TextRadioButtons
						question="Did you use a condom?"
						selectedValue={this.state.condomUsed}
						onChange={(value) => this.setState({ condomUsed: value })}
						options={[
							{
								label: 'Yes',
								value: 'yes'
							},
							{
								label: 'No',
								value: 'no'
							},
							{
								label: 'Yes but it broke',
								value: 'broke'
							},
							{
								label: 'Not sure',
								value: 'not-sure'
							}
						]}
					/>
					<Spacer size={40} />
					<TextRadioButtons
						question="Any birth control?"
						selectedValue={this.state.birthControl}
						onChange={(value) => this.setState({ birthControl: value })}
						options={[
							{
								label: 'Yes',
								value: 'yes'
							},
							{
								label: 'No',
								value: 'no'
							},
							{
								label: 'Not sure',
								value: 'not-sure'
							}
						]}
					/>
					{showUnder72Hrs ? (
						<React.Fragment>
							<Spacer size={40} />
							<TextRadioButtons
								question="Was it under 72 hours ago?"
								selectedValue={this.state.under72hrs}
								onChange={(value) => this.setState({ under72hrs: value })}
								options={[
									{
										label: 'Yes',
										value: 'yes'
									},
									{
										label: 'No',
										value: 'no'
									}
								]}
							/>
						</React.Fragment>
					) : null}
					<Spacer size={40} />
					<TextRadioButtons
						question="What kind of sex did you have?"
						selectedValues={this.state.types}
						onChange={(value) => this.setState({ types: value })}
						multi={true}
						options={[
							{
								label: 'Oral',
								value: 'oral'
							},
							{
								label: 'Vaginal',
								value: 'vaginal'
							},
							{
								label: 'Anal',
								value: 'anal'
							}
						]}
					/>
					<Spacer size={40} />
					<StyledText size="med" text="Who's the lucky one?" align="left" />
					<Spacer size={10} />
					<Item floatingLabel>
						<Label>Phone number</Label>
						<Input value={this.state.phoneNumber} onChangeText={(value) => this.setState({ phoneNumber: value })} />
					</Item>
					<Spacer size={5} />
					<StyledText size="xsmall" text="Save their phone number so you can (anonymously) contact them later via the app, if need be." align="left" />
					<Spacer size={40} />
					<Button text="Save" onPress={this.onSubmit} disabled={buttonDisabled} />
					<Spacer size={40} />
				</Content>
			</Container>
		)
	}
}

const s = StyleSheet.create({
	wrapper: {
		padding: 20,
	},
	submittedWrapper: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
	}
})

const mapStateToProps = (state) => ({
	logs: state.logs.logs,
})

const mapDispatchToProps = (dispatch) => ({
	saveNewLog: (data) => dispatch(LogActions.saveNewLog(data)),
	setFitbitData: () => dispatch(DigimeActions.setFitbitData())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewActivityHome)