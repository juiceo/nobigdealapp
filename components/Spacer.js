import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'native-base'

export default class Spacer extends React.Component {

	static propTypes = {
		size: PropTypes.number,
	}

	static defaultProps = {
		size: 0,
	}

	render() {
		const { size } = this.props
		return (
			<View style={{ height: size, width: size }}></View>
		)
	}
}
