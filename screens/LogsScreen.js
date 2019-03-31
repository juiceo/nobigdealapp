import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Container, Content, ListItem, Body, Text } from 'native-base';
import StyledText from '../components/StyledText'
import Spacer from '../components/Spacer';

class LogsScreen extends React.Component {
	static navigationOptions = {
		title: 'Your Logs',
	};

	renderLogs() {
		return _.map(this.props.logs, (log, index) => {
			return (
				<ListItem key={log.id}>
					<Body>
						<StyledText size="med" text={'Log #' + index} />
						<Spacer size={10} />
						<StyledText size="xsmall" text={new Date(log.timestamp).toISOString()} />
					</Body>
				</ListItem>
			)
		})
	}

	render() {
		return (
			<Container>
				<Content>
					{this.renderLogs()}
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
});

const mapStateToProps = (state) => ({
	logs: state.logs.logs
})

export default connect(mapStateToProps)(LogsScreen)