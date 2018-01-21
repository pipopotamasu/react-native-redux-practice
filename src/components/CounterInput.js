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


  render() {
    const {
      onInputCount,
      count
    } = this.props

    return (
      <View>
        <TextInput
          style={styles.input}
          value={count.toString()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={onInputCount}
        >
          <Text style={styles.buttonText}>Set Count</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
