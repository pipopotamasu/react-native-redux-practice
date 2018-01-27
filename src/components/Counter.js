import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';
import { countUp, countDown, inputCount } from '../actions/counter'
import CounterInput from './CounterInput'

export default Counter = (props) => {
  const dispatch = props.navigation.dispatch
  const {
    count
  } = props.navigation.state;

  return (
    <View style={styles.container}>
      <View>
        <Text>count: { count }</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={ () => dispatch(countUp())}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Count Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ () => dispatch(countDown())}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Count Down</Text>
        </TouchableOpacity>
      </View>
      <CounterInput
        onInputCount={ () => dispatch(inputCount())}
        count={count}
      >
      </CounterInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  // textInput: {
  //   flex: 3,
  //   backgroundColor: '#FFF',
  //   marginRight: 5,
  // },
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
