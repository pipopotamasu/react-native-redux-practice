import React, { Component } from 'react'
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  countUp = () =>  {
    this.setState({
      count: ++this.state.count
    });
  }

  render() {
    const {
      count,
    } = this.state;

    return (
      <View>
        <Text>{ count }</Text>
        <TouchableOpacity
          onPress={this.countUp}
        >
          <Text>Counter</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
