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
    r = this.state.n1 / (this.state.n2*this.state.n2);
    if (this.state.n1 === '' || this.state.n2 === '') {
      alert('Digite dois numeros!');
      return;
    }
    else if((this.state.n1 >= 0 || this.state.n1 <= 0) && (this.state.n2 >= 0 || this.state.n2 <= 0) && r < 18.5){
      this.setState({ nome: 'Abaixo do peso'});
    }
    else if((this.state.n1 >= 0 || this.state.n1 <= 0) && (this.state.n2 >= 0 || this.state.n2 <= 0) && (r >= 18.6 && r <= 24.9)){
      this.setState({ nome: 'Peso ideal'});
    }
    else if((this.state.n1 >= 0 || this.state.n1 <= 0) && (this.state.n2 >= 0 || this.state.n2 <= 0) && (r >= 25 && r <= 29.9)){
      this.setState({ nome: 'Levemente acima do peso'});
    }
    else if((this.state.n1 >= 0 || this.state.n1 <= 0) && (this.state.n2 >= 0 || this.state.n2 <= 0) && (r >= 30 && r <= 34.9)){
      this.setState({ nome: 'Obesidade grau 1' });
    }
    else if((this.state.n1 >= 0 || this.state.n1 <= 0) && (this.state.n2 >= 0 || this.state.n2 <= 0) && (r >= 35 && r <= 39.9)){
      this.setState({ nome: 'Obesidade grau 2 (severa)'});
    }
    else if((this.state.n1 >= 0 || this.state.n1 <= 0) && (this.state.n2 >= 0 || this.state.n2 <= 0) && r >= 40){
      this.setState({ nome: 'Obesidade grau 3 (mórbida)'});
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
          source={{uri: 'https://emagreceja.com.br/wp-content/uploads/2023/03/tabela-imc.png'}}
          style={{width: 300, height: 200, marginTop: 10, margin: 15}}
        />
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Peso"
          onChangeText={(valor) => this.setState({ n1: valor })}
          value={this.state.myNumber}
        />

        <TextInput
          type="number"
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Altura"
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
