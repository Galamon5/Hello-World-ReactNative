import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default class Inicio extends React.Component {
  render() {
    return (
      <View style={styles.container} >
          <Text>{this.props.mame}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent:'center',
    alignItems: 'center'
  }
});
