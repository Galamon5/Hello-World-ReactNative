import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TextoComponent extends React.Component {
  render() {
    return(
      <View>
        <Text style={estilos.texto}>
          Probando componentes en otra ventana 555 X 555 = {555*555}
        </Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  texto: {
    fontSize: 10,
    color: 'white',
  },
});
