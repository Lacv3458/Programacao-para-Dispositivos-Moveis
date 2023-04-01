import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet} from 'react-native';


export default function App(){
  const [gasolina, setGasolina] = useState('')
  const [alcool, setAlcool] = useState('')
  const [r, setR] = useState()

  function verificar() {
  if(!gasolina.trim() || !alcool.trim()){
    setR('Digite dois numeros!')
   }
  else if(gasolina/alcool <= 0.7){
    setR('O derivado da cana-de-açúcar é o melhor ')
  }
  else if(gasolina/alcool > 0.7){
    setR('Gasolina é melhor ')
  }
  }


  return(
    <View style={{ marginTop: 20 }}>
      <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
        Alcool ou Gasolina
      </Text>
    
    <Imagem />

    <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Preço Alcool"
          onChangeText={(valor) =>  setAlcool(valor)}
      />
            <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Preço Gasolina"
          onChangeText={(valor) =>  setGasolina(valor)}
      />

      <Button title="Verificar" onPress={verificar} />




      <Text style={{fontSize: 28, textAlign: 'center'}}>
      <Text style={styles.texto}> {r} </Text>

      </Text>
    </View>
  )
}

function Imagem() {  
    let img = 'https://calculocerto.com/wp-content/uploads/2019/11/gasolina-alcool-calculadora.png';


    return(
        <Image
        source={{ uri: img }}
        style={{width: 200, height: 150, marginTop: 10, margin: 65}}
      />
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
