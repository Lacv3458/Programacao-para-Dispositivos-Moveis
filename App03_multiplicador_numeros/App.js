
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet} from 'react-native';


export default function App(){
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [r, setR] = useState()

  function calcular() {
    if(!n1.trim() || !n2.trim()){
    setR('Digite dois numeros!')
   
    }
    else{
    setR(n1*n2)
    }
  }


  return(
    <View style={{ marginTop: 20 }}>
      <Text style={{fontSize: 28, textAlign: 'center'}}>
        Multiplicar Números
      </Text>

      <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Digite o primeiro n°"
          onChangeText={(valor) =>  setN1(valor)}
      />
            <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Digite o segundo n°"
          onChangeText={(valor) =>  setN2(valor)}
      />

    <Button title="Calcular" onPress={calcular} />
      
    <Text style={styles.texto}> {r} </Text>
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



