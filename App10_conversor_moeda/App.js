import React, { Component } from 'react';
import { View, Text, TextInput, Button, Switch, ScrollView} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      moeda: 'Dólar',
      valor: 'Dólar',
      r:'0'
    };
    this.confirmar = this.confirmar.bind(this);
  }
 
  confirmar(){
//Dolar
if(this.state.moeda == 'Dólar' && this.state.valor == 'Dólar')
{
this.setState({
      resultado:
                  'US$'+this.state.r
    });
}
if(this.state.moeda == 'Dólar' && this.state.valor == 'Real')
{
this.setState({
      resultado:
                  'US$'+this.state.r*5.25
    });
}
if(this.state.moeda == 'Dólar' && this.state.valor == 'Euros')
{
this.setState({
      resultado:
                  'US$'+this.state.r*0.93
    });
}

//Real
if(this.state.moeda == 'Real' && this.state.valor == 'Dólar')
{
this.setState({
      resultado:
                   'R$'+this.state.r*0.19
    });
}
if(this.state.moeda == 'Real' && this.state.valor == 'Real')
{
this.setState({
      resultado:
                  'R$'+this.state.r
    });
}
if(this.state.moeda == 'Real' && this.state.valor == 'Euros')
{
this.setState({
      resultado:
                  'R$'+this.state.r*0.18
    });
}

//Euros
if(this.state.moeda == 'Euros' && this.state.valor == 'Dólar')
{
this.setState({
      resultado:
                   'E$'+this.state.r*1.08
    });
}
if(this.state.moeda == 'Euros' && this.state.valor == 'Real')
{
this.setState({
      resultado:
                  'E$'+this.state.r*5.65
    });
}
if(this.state.moeda == 'Euros' && this.state.valor == 'Euros')
{
this.setState({
      resultado:
                   'E$'+this.state.r
    });
}
    
  }
 
  render(){
    return(
      <ScrollView>
        <View style={styles.container}>

          <Text style={styles.titulo}>Conversor de Moedas </Text>
          <Text style={styles.titulo}>Dólar, Real, Euros</Text>

        <View>
          <Text style={styles.label}>Valor:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(valor) => this.setState({r: valor})}
          />
        </View>

        
          <Text style={styles.label}>De:</Text>
          <Picker
            selectedValue={this.state.moeda}
            onValueChange={ (itemValue, itemIndex) => this.setState({moeda: itemValue}) }
          >
            <Picker.Item key={1} value='Dólar' label="Dólar" />
            <Picker.Item key={2} value='Real' label="Real" />
            <Picker.Item key={3} value='Euros' label="Euros" />
          </Picker>

          <Text style={styles.label}>Para:</Text>
          <Picker
            selectedValue={this.state.valor}
            onValueChange={ (itemValue, itemIndex) => this.setState({valor: itemValue}) }
          >
            <Picker.Item key={1} value='Dólar' label="Dólar" />
            <Picker.Item key={2} value='Real' label="Real" />
            <Picker.Item key={3} value='Euros' label="Euros" />
          </Picker>


          <Button title="Confirmar" onPress={this.confirmar} />
    
          <Text style={styles.texto}> {this.state.resultado} </Text>
        </View>
      </ScrollView>
    );
  }
}
 
export default App;
