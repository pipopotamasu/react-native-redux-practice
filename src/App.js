/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'
import Counter from './components/Counter';
import { countUp } from './actions/counter'

class App extends Component<{}> {
  render() {
    const { dispatch, count } = this.props;
    console.log(count)
    return (
      <View style={styles.container}>
        <Counter
          onCountUp={ () => dispatch(countUp('hoge')) }
          count={ count }
          ></Counter>
      </View>
    );
  }
}

function select(state) {
  return {
    count: state,
  }
}

export default connect(select)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});