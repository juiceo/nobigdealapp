import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { View, Text } from 'native-base'
import _ from 'lodash'

import Colors from '../constants/Colors'
import StyledText from '../components/StyledText'
import Spacer from '../components/Spacer'

export default class TextRadioButtons extends Component {

	static propTypes = {
		question: PropTypes.string.isRequired,
		options: PropTypes.arrayOf(PropTypes.shape({
			label: PropTypes.string,
			value: PropTypes.string
		})).isRequired,
		selectedValues: PropTypes.array,
		selectedValue: PropTypes.string,
		onChange: PropTypes.func.isRequired,
		multi: PropTypes.bool,
	}

	handleChange(selected) {
		const { multi, selectedValues, onChange } = this.props

		if (multi) {
			if (selectedValues.indexOf(selected) !== -1) {
				onChange(_.filter(selectedValues, val => val !== selected))
			} else {
				onChange(_.concat(selectedValues, [selected]))
			}
		} else {
			this.props.onChange(selected)
		}
	}

	renderOptions() {
		const { options, onChange, selectedValue, selectedValues, multi } = this.props
		return _.map(options, (option) => {
			let isSelected;

			if (multi) {
				isSelected = selectedValues.indexOf(option.value) !== -1;
			} else {
				isSelected = selectedValue === option.value;
			}
			return (
				<TouchableOpacity key={option.value} onPress={() => this.handleChange(option.value)}>
					<View style={[s.option, isSelected ? s.optionSelected : {}]}>
						<Text style={[s.optionLabel, isSelected ? s.optionLabelSelected : {}]}>{option.label}</Text>
					</View>
				</TouchableOpacity>
			)
		})
	}

	render() {

		const { title, subtitle, question } = this.props

		return (
			<View style={s.wrapper}>
				<StyledText text={question} size="med" />
				<Spacer size={10} />
				<View style={s.options}>
					{this.renderOptions()}
				</View>
			</View>
		)
	}
}

const s = StyleSheet.create({
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'flex-start',
	},
	question: {
		fontSize: 21,
		fontWeight: 'bold',
		color: Colors.defaultText
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
	},
	option: {
		paddingHorizontal: 15,
		paddingVertical: 6,
		borderWidth: 1,
		borderColor: Colors.blue,
		borderRadius: 16,
		marginRight: 10,
		marginBottom: 10,
	},
	optionLabel: {
		fontSize: 16,
		color: Colors.blue,
	},
	optionLabelSelected: {
		color: Colors.white,
	},
	optionSelected: {
		backgroundColor: Colors.blue,
	}
})