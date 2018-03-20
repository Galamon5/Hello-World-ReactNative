import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import TextoComponent from './TextoComponente';

export default class App extends React.Component {
  constructor(){
    super()//hace obligatoriamente el constructor antes de hacer cualquier otra cosa
    this.state={
      status: false,
      data: null
    }
  }
  clicked(){
    this.setState({
      status:!this.state.status
    })
  }
  render() {
    return (
      <View style={styles.container}>
      <ComponenteHijo status={this.state.status}/>
        <Button
          onPress={this.clicked.bind(this)}
          title = "Puchame"
          color = 'blue'
        />
        <TextoComponent/>
        <Text style={styles.texto}>Hola Mundo! .________.!!</Text>
      </View>
    );
  }
}
export class ComponenteHijo extends React.Component{
  render(){
    return(
      <View>
      <View style={this.props.status ? styles.on : styles.off}/>
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
  on: {
    width:100,
    height:100,
    backgroundColor: 'red',
  },
  off: {
    width:100,
    height:100,
    backgroundColor: 'black',
  },
  texto: {
    fontSize: 20,
    color: 'green',
  },
});
