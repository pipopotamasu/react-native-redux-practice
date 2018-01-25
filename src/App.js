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
import { addNavigationHelpers } from 'react-navigation';
import Navigation from './components/Navigation';

class Nav extends Component<{}> {
  render() {
    const state = Object.assign(this.props.nav.routes[1], { count: this.props.count })
    return (
      <Navigation
        navigation={addNavigationHelpers({
          dispatch: this.props.dispatch,
          state: this.props.nav,
        })}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  nav: state.nav,
  count: state.count
});

export default connect(mapStateToProps)(Nav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
