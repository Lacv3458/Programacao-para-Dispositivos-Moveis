import React, { useState } from 'react'
import {View, Text, StyleSheet, Button, TextInput} from 'react-native'
import api from './src/services/api'


export default function App(){
  const [cep, setCep] = useState()
  const [cep2, setCep2] = useState()
  const [logradouro, setLogradouro] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [estado, setEstado] = useState()


  const consultaCep = async (cep) => {
    const response = await api.get('/' + cep + '/json/');
    setCep2(response.data.cep)
    setLogradouro(response.data.logradouro)
    setBairro(response.data.bairro)
    setCidade(response.data.localidade)
    setEstado(response.data.uf)
  }


    return(
      <View style={styles.container}>
        <TextInput
        style={styles.cep}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        underlineColorAndroid="transparent"
        keyboardType='numeric'
        />


        <Button title="Consultar Cep" onPress={() => consultaCep(cep)} />


        <Text style={styles.logradouro}>Cep: {cep2}</Text>
        <Text style={styles.logradouro}>Logradouro: {logradouro}</Text>
        <Text style={styles.logradouro}>Bairro: {bairro}</Text>
        <Text style={styles.logradouro}>Cidade: {cidade}</Text>
        <Text style={styles.logradouro}>Estado: {estado}</Text>
      </View>    
    )
  }


const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 60,
    alignItems: 'center'
  },
  logradouro:{
    marginTop: 15,
    fontSize: 30,
    textAlign: 'center'
  },
  cep:{
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
  }
});

