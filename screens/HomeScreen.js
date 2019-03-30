import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { Container, Content } from 'native-base'
import Colors from '../constants/Colors'
import { LinearGradient } from 'expo';

import StyledText from '../components/StyledText'
import ScreenTitle from '../components/ScreenTitle';
import Spacer from '../components/Spacer';
import Button from '../components/Button';

import send from '../services/TwilioService';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props)

    this.state = {
      connected: false,
    }

    this.newActivity = this.newActivity.bind(this)
  }

  newActivity = () => {
    this.props.navigation.navigate('NewActivity')
  }

  checkUp = () => {
    this.props.navigation.navigate('CheckUp')
  }

  latestDiagnosis = () => {
    this.props.navigation.navigate('LatestDiagnosis', { disease: 'Chlamydia' })
  }

  renderConnect() {
    return (
      <React.Fragment>
        <Spacer size={106} />
        <View style={s.connectNotice}>
          <StyledText size="large" color={Colors.blue} text="Connect your Digi.me account" />
          <Spacer size={10} />
          <StyledText size="small" text="To import your health records" />
          <Spacer size={20} />
          <Button text="Connect" onPress={() => this.setState({ connected: true })} />
        </View>
      </React.Fragment >
    )
  }

  renderNormal() {
    return (
      <React.Fragment>
        <Spacer size={20} />
        <View style={s.card}>
          <View style={s.cardItem}>
            <View style={s.cardItemLeft}>
              <StyledText text="Test Results" size="xsmall" color={Colors.purple} align="left" />
            </View>
            <View style={s.cardItemRight}>
              <StyledText text="Results are in" size="small" align="left" />
            </View>
          </View>
          <View style={s.cardItem}>
            <View style={s.cardItemLeft}>
              <StyledText text="Reminder" size="xsmall" color={Colors.purple} align="left" />
            </View>
            <View style={s.cardItemRight}>
              <StyledText text="Upcoming doctor appointment" size="small" align="left" />
            </View>
          </View>
          <View style={s.cardItem}>
            <View style={s.cardItemLeft}>
              <StyledText text="ePrescription" size="xsmall" color={Colors.purple} align="left" />
            </View>
            <View style={s.cardItemRight}>
              <StyledText text="You have a new eRecipe" size="small" align="left" />
            </View>
          </View>
        </View>
        <Spacer size={20} />
        <View style={s.buttonRow}>
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={s.button}>
              <Image style={s.buttonImage} source={require('../assets/images/group12.png')} />
              <Spacer size={10} />
              <StyledText text="Tests" size="small" color={Colors.blue} />
            </View>
          </TouchableOpacity>
          <Spacer size={20} />
          <TouchableOpacity style={{ flex: 1 }}>
            <View style={s.button}>
              <Image style={s.buttonImage} source={require('../assets/images/group3.png')} />
              <Spacer size={10} />
              <StyledText text="Prescriptions" size="small" color={Colors.blue} />
            </View>
          </TouchableOpacity>
        </View>
        <Spacer size={20} />
        <View style={s.buttonRow}>
          <TouchableOpacity style={{ flex: 1 }} onPress={this.latestDiagnosis}>
            <View style={s.button}>
              <Image style={s.buttonImage} source={require('../assets/images/fill1.png')} />
              <Spacer size={10} />
              <StyledText text="Status" size="small" color={Colors.blue} />
            </View>
          </TouchableOpacity>
          <Spacer size={20} />
          <TouchableOpacity style={{ flex: 1 }} onPress={() => send()}>
            <View style={s.button}>
              <Image style={s.buttonImage} source={require('../assets/images/group4.png')} />
              <Spacer size={10} />
              <StyledText text="Contact" size="small" color={Colors.blue} />
            </View>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    )
  }

  render() {

    return (
      <Container>
        <LinearGradient
          colors={['rgb(255,255,255)', 'rgb(255,255,255)']}
          style={{ flex: 1 }}>
          <Content style={s.wrapper}>
            <Spacer size={60} />
            <StyledText text="Hello Anna!" size="xlarge" color={Colors.blue} align="left" />
            <StyledText text="Last visit 22.3.2019" size="xsmall" align="left" />
            <Spacer size={20} />
            <TouchableOpacity onPress={this.newActivity}>
              <View style={s.newEntry}>
                <Image style={{ width: 80, height: 80 }} source={require('../assets/images/group8.png')} />
                <Spacer size={10} />
                <StyledText text="New entry" size="med" color={Colors.blue} />
              </View>
            </TouchableOpacity>
            {this.state.connected ? (
              this.renderNormal()
            ) : (
                this.renderConnect()
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
  },
  card: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    borderColor: Colors.blue,
    borderWidth: 1,
  },
  cardItem: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(251,251,251)'
  },
  cardItemLeft: {
    flex: 1,
    paddingRight: 10,
  },
  cardItemRight: {
    flex: 2,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    height: 100,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.blue,
  },
  buttonImage: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  newEntry: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  connectNotice: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
})