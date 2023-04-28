import React, { useState } from 'react';
import { View, Button, Text, Switch, TextInput, StyleSheet, ScrollView} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';


export default function App(){
  const navigation = useNavigation();
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('Masculino')
  const [escolaridade, setEscolaridade] = useState('Ensino Fundamental')
  const [valor, setValor] = useState(0)
  const [brasileiro, setBrasil] = useState(true)


  
  function entrar() {
  navigation.navigate('Dados Informados', { nome: nome, idade: idade, sexo: sexo, escolaridade: escolaridade, valor: valor, brasileiro: brasileiro });
  
  }


  return(
    <ScrollView>
    <View style={styles.area}>
        <Text style={styles_r.texto_r}> Nome: </Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          onChangeText={(valor) => setNome(valor)}
        />
    </View>

    <View style={{flexdirection: "row"}}>
        <Text style={styles_r.texto_r}> Idade: </Text>
        <TextInput
          type="number"
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Idade"
          onChangeText={(valor) => setIdade(valor)}
        />
    </View>
    
    <View style={styles.area}>
        <Text style={styles_r.texto_r}> Sexo: </Text>
        <Picker
          onValueChange={ (itemValue) => setSexo(itemValue) }
        >
        <Picker.Item key={1} value={"Masculino"} label="Masculino" />
        <Picker.Item key={2} value={"Feminino"} label="Feminino" />
        <Picker.Item key={3} value={"Outro"} label="Outro" />
        </Picker>
        </View>
    

    <View style={styles.area}>
        <Text style={styles_r.texto_r}> Escolaridade: </Text>
        <Picker
          onValueChange={ (itemValue) => setEscolaridade(itemValue) }
        >
        <Picker.Item key={4} value={"Ensino Fundamental"} label="Ensino Fundamental" />
        <Picker.Item key={5} value={"Ensino Medio"} label="Ensino Medio" />
        <Picker.Item key={6} value={"Ensino Superior"} label="Ensino Superior" />
        </Picker>
    </View>

    <View style={styles.area}>
      <Text style={styles_r.texto_r}> Limite: </Text>
      <Slider
        minimumValue={0}
        maximumValue={1000}
        onValueChange={ (valorSelecionado) => setValor(valorSelecionado)}
        value={valor}
        step={1}
      />
      <Text style={{textAlign: 'center', fontSize: 30}}>
        {valor.toFixed(0)}
      </Text>
    </View>

    <View style={styles.area}>
      <Text style={styles_r.texto_r}> Brasileiro: </Text>
      <Switch 
      value={brasileiro}
      onValueChange={ (valorSwitch) => setBrasil(valorSwitch)}
      
      />
    </View>
    <Button title="Confirmar" onPress={entrar}/>

    </ScrollView>
  )
}



const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  }
});

const styles_r = StyleSheet.create({
  texto_r: {
    textAlign: 'left',
    fontSize: 25,
  },
});
