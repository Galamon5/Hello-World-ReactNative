import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LOL</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: 'yellow',
  },
});
