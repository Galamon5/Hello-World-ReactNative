import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      numero: 3
    }
  }
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.box1}>
          <Text>Contador</Text>
        </View>
        <View style={styles.box2}>
      {/*    <Text>2</Text>*/}
          <Text>{this.state.numero}</Text>
        </View>
        <View style={styles.box3}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'

  },
  box1: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent:'center',
    alignItems: 'center'
  },
  box2: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent:'center',
    alignItems: 'center'
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent:'center',
    alignItems: 'center'
  }
});
