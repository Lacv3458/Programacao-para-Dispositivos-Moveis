import React, { useState } from 'react';
import { View, Button, Text, Switch, TextInput, StyleSheet, Picker, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';


export default function App(){
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('Masculino')
  const [escolaridade, setEscolaridade] = useState('Ensino Fundamental')
  const [valor, setValor] = useState(0)
  const [brasileiro, setBrasil] = useState(true)
  const [formNome, setformNome] = useState()
  const [formIdade, setformIdade] = useState()
  const [formSexo, setformSexo] = useState()
  const [formEscolaridade, setformEscolaridade] = useState()
  const [formValor, setformValor] = useState()
  const [formBrasil, setformBrasil] = useState()

  function entrar() {
  setformNome('Nome: '+nome)
  setformIdade('Idade: ' + idade)
  setformSexo('Sexo:'+ sexo)
  setformEscolaridade(escolaridade)
  setformValor('R$: ' + valor)
  if(brasileiro==true)
  {
  setformBrasil('Brasileiro')
  }
  else{
  setformBrasil('Não Brasileiro')
  }
  
  }


  return(
    <ScrollView>
    <View style={{ marginTop: 20 }}>
      <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
        Abertura de conta
    </Text>
    </View>

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
    <Text style={styles_r.texto_r}> {formNome} </Text>
    <Text style={styles_r.texto_r}> Dados Informados: </Text>
        <Text style={styles_r.texto_r}> {formIdade} </Text>
        <Text style={styles_r.texto_r}> {formSexo} </Text>
        <Text style={styles_r.texto_r}> {formEscolaridade} </Text>
        <Text style={styles_r.texto_r}> {formValor} </Text>
        <Text style={styles_r.texto_r}> {formBrasil} </Text>
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