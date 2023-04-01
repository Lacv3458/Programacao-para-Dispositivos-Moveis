import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet, Picker} from 'react-native';


export default function App(){
  const [valorM, setValorM] = useState('')
  const [moeda1, setMoeda1] = useState('Dólar')
  const [moeda2, setMoeda2] = useState('Dólar')
  const [r, setR] = useState()

  function verificar() {
  if(!valorM.trim()){
    setR('Digite um valor!')
   }
   //Dolar
  else if(moeda1 == 'Dólar' && moeda2 == 'Dólar')
  {
    setR('US$'+ valorM)
  }
    else if(moeda1 == 'Dólar' && moeda2 == 'Real')
  {
    setR('US$'+ valorM*5.25)
  }
    else if(moeda1 == 'Dólar' && moeda2 == 'Euros')
  {
    setR('US$'+ valorM*0.93)
  }
  //Euro
    else if(moeda1 == 'Euros' && moeda2 == 'Dólar')
  {
    setR('US$'+ valorM*1.08)
  }
    else if(moeda1 == 'Euros' && moeda2 == 'Real')
  {
    setR('US$'+ valorM*5.65)
  }
    else if(moeda1 == 'Euros' && moeda2 == 'Euros')
  {
    setR('US$'+ valorM)
  }
  //Real
    else if(moeda1 == 'Real' && moeda2 == 'Dólar')
  {
    setR('US$'+ valorM*0.19)
  }
    else if(moeda1 == 'Real' && moeda2 == 'Real')
  {
    setR('US$'+ valorM)
  }
    else if(moeda1 == 'Real' && moeda2 == 'Euros')
  {
    setR('US$'+ valorM*0.18)
  }

  }


  return(
    <View style={{ marginTop: 20 }}>
      <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
        Conversor de moeda
      </Text>


    <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Valor"
          onChangeText={(valor) =>  setValorM(valor)}
      />


      <Text style={styles.label}>De:</Text>
      <Picker
             selectedValue={moeda1}
            onValueChange={(itemIndex) =>  setMoeda1(itemIndex)}
          >
            <Picker.Item key={1} value='Dólar' label="Dólar" />
            <Picker.Item key={2} value='Real' label="Real" />
            <Picker.Item key={3} value='Euros' label="Euros" />
      </Picker>

      <Text style={styles.label}>Para:</Text>
      <Picker
             selectedValue={moeda2}
            onValueChange={(itemIndex) =>  setMoeda2(itemIndex)}
          >
            <Picker.Item key={1} value='Dólar' label="Dólar" />
            <Picker.Item key={2} value='Real' label="Real" />
            <Picker.Item key={3} value='Euros' label="Euros" />
      </Picker>

      <Button title="Verificar" onPress={verificar} />

      <Text style={styles.texto}> {r} </Text>


      <Text style={{fontSize: 28, textAlign: 'center'}}>
      

      </Text>
    </View>
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