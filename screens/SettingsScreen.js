import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, ListItem, Body, Text, Form, Item, Input, Label, Picker, Icon } from 'native-base';



export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Details',
  };

  constructor(props) {
    super(props)

    this.state = {
      age: null,
      gender: null,
      orientation: null,
    }
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item>
              <Label>Age</Label>
              <Input value={this.state.age} onValueChange={(value) => this.setState({ age: value })} />
            </Item>
            <Item picker>
              <Label>Gender</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select one"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.gender}
                onValueChange={(value) => this.setState({ gender: value })}
              >
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
            </Item>
            <Item picker>
              <Label>Sexual orientation</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder="Select one"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.orientation}
                onValueChange={(value) => this.setState({ orientation: value })}
              >
                <Picker.Item label="Straight" value="straight" />
                <Picker.Item label="Gay" value="gay" />
                <Picker.Item label="Bi" value="bi" />
                <Picker.Item label="Pansexual" value="pansexual" />
                <Picker.Item label="Asexual" value="asexual" />
              </Picker>
            </Item>
            <Item>
              <Label>Health records</Label>
              <Text>Connect to Digi.me</Text>
            </Item>
          </Form>
        </Content>
      </Container>
    )
  }
}

const s = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  }
})