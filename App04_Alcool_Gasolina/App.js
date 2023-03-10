import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: '',
      n2: '',
      r: '',
      input: '',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    r = this.state.n1 / this.state.n2;
    if (this.state.n1 === '' || this.state.n2 === '') {
      alert('Digite dois numeros!');
      return;
    }
    else if((this.state.n1 >= 0 || this.state.n1 <= 0) && (this.state.n2 >= 0 || this.state.n2 <= 0) && (this.state.n1 / this.state.n2) < 0.7){
      this.setState({ nome: 'Alcool é melhor: ' + r });
    }
    else if((this.state.n1 >= 0 || this.state.n1 <= 0) && (this.state.n2 >= 0 || this.state.n2 <= 0) && (this.state.n1 / this.state.n2) > 0.7){
      this.setState({ nome: 'Gasolina é melhor: ' + r });
    }
    else{
      alert('Digite apenas números!');
      return;
    }
    
  }

  render() {
    return (
      <View style={styles.area}>
        <Text style={styles.texto}> Alcool ou Gasolina </Text>
        
        <Image
          source={{uri: 'https://calculocerto.com/wp-content/uploads/2019/11/gasolina-alcool-calculadora.png'}}
          style={{width: 200, height: 150, marginTop: 10, margin: 65}}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Preço do Alcool"
          onChangeText={(valor) => this.setState({ n1: valor })}
          value={this.state.myNumber}
        />

        <TextInput
          type="number"
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Preço da Gasolina"
          onChangeText={(valor) => this.setState({ n2: valor })}
        />

        <Button title="Verificar" onPress={this.entrar} />

        <Text style={styles.texto}> {this.state.nome} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});

export default App;
