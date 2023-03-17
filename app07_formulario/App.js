import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Switch} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      n1: '',
      n2: '',
      sexo: 'Masculino',
      e: 'Ensino Fundamental',
      valor: 0,
      input_r:'',
      status: false,
    };

    this.entrar = this.entrar.bind(this);
  }

  entrar() {
   
    this.setState({form_n: "Nome: " + this.state.n1});
    this.setState({form_i: "Idade: "+ this.state.n2});
    this.setState({form_s: "Sexo: "+ this.state.sexo});
    this.setState({form_e: "Escolaridade : "+ this.state.e});
    this.setState({form_v: "Valor: R$"+ this.state.valor.toFixed(2)});
    this.setState({form_v: "Valor: R$"+ this.state.valor.toFixed(2)});
    if(this.state.status == true)
    {
    this.setState({form_sw: "Brasileiro"});
    }
   else{
     this.setState({form_sw: "Não Brasileiro"});
   }
    return;
    
  }

  render() {
    return (
      <View style={styles.area}>
        <Text style={styles.texto}> Abertura de conta </Text>
        <View style={{flexdirection: "row"}}>
        <Text style={styles_r.texto_r}> Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={(valor) => this.setState({ n1: valor })}
          value={this.state.myNumber}
        />

        </View>
        <View style={{flexdirection: "row"}}>
        <Text style={styles_r.texto_r}> Idade: </Text>
        <TextInput
          type="number"
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Idade"
          onChangeText={(valor) => this.setState({ n2: valor })}
        />
      </View>

      <Picker
      selectedValue={this.state.sexo}
      onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
      >
        <Picker.Item key={1} value={"Masculino"} label="Masculino" />
        <Picker.Item key={2} value={"Feminino"} label="Feminino" />
        <Picker.Item key={3} value={"Outro"} label="Outro" />
        </Picker>

      <Picker
      selectedValue={this.state.e}
      onValueChange={ (itemValue, itemIndex) => this.setState({e: itemValue}) }
      >
        <Picker.Item key={4} value={"Ensino Fundamental"} label="Ensino Fundamental" />
        <Picker.Item key={5} value={"Ensino Medio"} label="Ensino Medio" />
        <Picker.Item key={6} value={"Ensino Superior"} label="Ensino Superior" />
        </Picker>

      <Slider
      minimumValue={0}
      maximumValue={1000}
      onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
      value={this.state.valor}
      step={1}
      />

      <Switch 
      value={this.state.status}
      onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}
      />


      <Text style={{textAlign: 'center', fontSize: 30}}>
      {this.state.valor.toFixed(0)}
      </Text>
       <Text style={{textAlign: 'center', fontSize:30}}>
        {(this.state.status) ? "Ativo" : "Inativo"}
      </Text>



        <Button title="Confirmar" onPress={this.entrar} />
        <Text style={styles_r.texto_r}> Dados Informados: </Text>
        <Text style={styles_r.texto_r}> {this.state.form_n} </Text>
        <Text style={styles_r.texto_r}> {this.state.form_i} </Text>
        <Text style={styles_r.texto_r}> {this.state.form_s} </Text>
        <Text style={styles_r.texto_r}> {this.state.form_e} </Text>
        <Text style={styles_r.texto_r}> {this.state.form_v} </Text>
        <Text style={styles_r.texto_r}> {this.state.form_sw} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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

const styles_r = StyleSheet.create({
  texto_r: {
    textAlign: 'left',
    fontSize: 25,
  },
});

export default App;