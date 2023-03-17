import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    
      this.setState({ n: Math.floor(Math.random() * 11)});
      
      return;
    
  }

  render() {
    return (
      <View style={styles.area}>
        <Text style={styles.texto}> Jogo do N° Aleatório</Text>
        
        <Image
          source={{uri: 'https://sm.ign.com/t/ign_br/screenshot/default/og_yu46.h720.jpg'}}
          style={{width: 300, height: 200, marginTop: 10, margin: 15}}
        />
        <Text style={styles.texto}> Pense em um n° de 0 a 10</Text>
        <Text style={styles.texto}> {this.state.n} </Text>
        <Button title="Verificar" onPress={this.entrar} />

        
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