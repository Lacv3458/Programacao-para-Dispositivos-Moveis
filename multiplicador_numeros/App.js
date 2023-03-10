import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      n1: '',
      n2: '',
      input: ''
    };
    
    this.entrar = this.entrar.bind(this);
  }


  entrar(){
    if (this.state.n1 === '' && this.state.n2 === ''){
      alert('Digite dois numeros!')
      return;
    }
    this.setState({nome: 'Resultado: '+ this.state.n1 * this.state.n2});
  }


  render(){
    return(
      <View style={styles.area}>
      <Text style={styles.texto}> Multiplicador de Números </Text>

      <TextInput 
      style={styles.input}
      keyboardType = 'number-pad'
      placeholder="Digite o primeiro n°"
      onChangeText={ (int) => this.setState({n1: int})}
      value = {this.state.myNumber}
      />

      <TextInput type="number"
      style={styles.input}
      keyboardType = 'number-pad'
      placeholder="Digite o segundo n°"
      onChangeText={ (int) => this.setState({n2: int})}
      />

      <Button title="Calcular" onPress={this.entrar} />


      <Text style={styles.texto}> {this.state.nome} </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  }
})


export default App;
