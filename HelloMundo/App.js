import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Inicio from '././inicio';
import Body from '././body';
import Final from '././final';
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      numero: 0
    }
  }
  aumentar = () =>{
    this.setState({
      numero: this.state.numero+1
    })
  }
  disminuir = () =>{
    this.setState({
      numero: this.state.numero-1
    })
  }
  render() {
    return (
      <View style={styles.container} >
        <Inicio mame="Calculadora"/>
        <Body numero = {this.state.numero}/>
        <Final sumar={this.aumentar} restar={this.disminuir}/>
      {/* <View style={styles.box3}>
          <Button title="Aumentar" onPress={()=>{this.aumentar();}}/>
          <Button title="Disminuye" onPress={()=>{this.disminuir();}}/>
        </View>*/}
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
