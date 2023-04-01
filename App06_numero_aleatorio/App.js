
import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image} from 'react-native';


export default function App(){
  const [n1, setN1] = useState('')
  const [n2, setN2] = useState('')
  const [r, setR] = useState()

  function calcular() {
  
    setR(Math.floor(Math.random() * 11))
    
  }


  return(
    <View style={{ marginTop: 20 }}>
      <Text style={{fontSize: 28, textAlign: 'center'}}>
        Jogo do N° Aleatório
      </Text>

      <Imagem />

      <Text style={styles.texto}>
        Pense em um n° de 0 a 10
      </Text>


    <Text style={styles.texto}> {r} </Text>

    <Button title="Calcular" onPress={calcular} />
      
    
    </View>
  )
}

function Imagem() {  
    let img = 'https://sm.ign.com/t/ign_br/screenshot/default/og_yu46.h720.jpg';


    return(
        <Image
        source={{ uri: img }}
        style={{width: 300, height: 200, marginTop: 10, margin: 15}}
      />
    )
}

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    fontSize: 25,
  },
});



