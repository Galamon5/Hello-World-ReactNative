/* @flow */

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
        <TextInput
          placeholder="Escribe tu tarea"
          onChangeText={this.props.cambiarTexto}
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
          style={styles.entrada}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  entrada: {
    paddingHorizontal: 16,
  },
});
