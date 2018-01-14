import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default Counter = (props) => {
  const {
    onCountUp,
    onCountDown,
    onInputCount
    count
  } = props;

  return (
    <View>
      <Text>count: { count }</Text>
      <TouchableOpacity
        onPress={onCountUp}
      >
        <Text>Count Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onCountDown}
      >
        <Text>Count Down</Text>
      </TouchableOpacity>
    </View>
  );
}
