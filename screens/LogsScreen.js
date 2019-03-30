import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Container, Content, ListItem, Body, Text } from 'native-base';


class LogsScreen extends React.Component {
	static navigationOptions = {
		title: 'Your Logs',
	};

	renderLogs() {
		return _.map(this.props.logs, (log, index) => {
			return (
				<ListItem key={log.id}>
					<Body>
						<Text>Log #{index}</Text>
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