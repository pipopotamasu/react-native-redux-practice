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
    count
  } = props;

  return (
    <View>
      <Text>{ count }</Text>
      <TouchableOpacity
        onPress={onCountUp}
      >
        <Text>Count Up</Text>
      </TouchableOpacity>
    </View>
  );
}
