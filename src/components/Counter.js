import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  TextInput
} from 'react-native';

export default Counter = (props) => {
  const {
    onCountUp,
    onCountDown,
    onInputCount,
    count
  } = props;

  return (
    <View style={styles.container}>
      <View>
        <Text>count: { count }</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onCountUp}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Count Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onCountDown}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Count Down</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          style={styles.input}
          value={count.toString()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this._onPress}
        >
          <Text style={styles.buttonText}>Set Count</Text>
        </TouchableOpacity>
      </View>
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
