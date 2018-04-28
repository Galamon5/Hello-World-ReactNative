import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default class Body extends React.Component {
  render() {
    return (
      <View style={styles.container} >
          <Text>{this.props.numero}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems: 'center'
  }
});
