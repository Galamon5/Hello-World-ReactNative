import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextoComponent from './TextoComponente';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextoComponent/>
        <Text style={styles.texto}>Hola Mundo! .________.!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    color: 'green',
  },
});
