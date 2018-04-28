import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
export default class Final extends React.Component {
  render() {
    return (
      <View style={styles.container} >
          <Button
          title="Aumentar"
          onPress={()=>{this.props.sumar();}}/>
          <Button
          title="Disminuir"
          onPress={()=>{this.props.restar();}}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent:'center',
    alignItems: 'center'
  }
});
