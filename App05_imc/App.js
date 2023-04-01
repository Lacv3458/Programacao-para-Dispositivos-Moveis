import React, { useState } from 'react';
import { View, Text, Button, Image, TextInput, StyleSheet} from 'react-native';


export default function App(){
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [r, setR] = useState()

  function verificar() {
  if(!peso.trim() || !altura.trim()){
    setR('Digite dois numeros!')
   }
  else if(peso/(altura*altura) < 18.5){
    setR('Abaixo do peso')
  } 
  else if(peso/(altura*altura) >= 18.6 && peso/(altura*altura) < 24.9){
    setR('Peso ideal')
  }
  else if(peso/(altura*altura) >= 25 && peso/(altura*altura) < 29.9){
    setR('Levemente acima do peso')
  }
  else if(peso/(altura*altura)  >= 30 && peso/(altura*altura) < 34.9){
    setR('Obesidade grau 1')
  }
  else if(peso/(altura*altura) >= 35 && peso/(altura*altura) < 39.9){
    setR('Obesidade grau 2 (severa)')
  }
  else{
    setR('Obesidade grau 3 (mórbida)')
  }
  }


  return(
    <View style={{ marginTop: 20 }}>
      <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
        IMC
      </Text>
    
    <Imagem />

    <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Peso"
          onChangeText={(valor) =>  setPeso(valor)}
      />
            <TextInput
          style={styles.input}
          keyboardType="number-pad"
          placeholder="Altura"
          onChangeText={(valor) =>  setAltura(valor)}
      />

      <Button title="Verificar" onPress={verificar} />




      <Text style={{fontSize: 28, textAlign: 'center'}}>
      <Text style={styles.texto}> {r} </Text>

      </Text>
    </View>
  )
}

function Imagem() {  
    let img = 'https://emagreceja.com.br/wp-content/uploads/2023/03/tabela-imc.png';


    return(
        <Image
        source={{ uri: img }}
         style={{width: 300, height: 200, marginTop: 10, margin: 15}}
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
