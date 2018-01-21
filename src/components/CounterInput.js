import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4169E1',
    marginLeft: 5,
    justifyContent: 'center',
    padding: 5
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
  input: {
    color: '#FFF',
    backgroundColor: 'black',
    marginRight: 5,
  },
});

export default class CounterInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  _onPress = () => {
    this.props.onInputCount(this.state.input);
    this.setState({input: ''})
  }

  _onChangeInput = (input) => {
    if(isNaN(input)) return;
    this.setState({input})
  }


  render() {

    return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={(input) => this._onChangeInput(input)}
          value={this.state.input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this._onPress}
        >
          <Text style={styles.buttonText}>Set Count</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
