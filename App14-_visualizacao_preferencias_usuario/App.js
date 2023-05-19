import React, { useState, useEffect } from 'react'
import { View,  Text, StyleSheet,  ScrollView} from 'react-native';
import { Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function App(){

  const [capslk, setCapslk] = useState(false)
  const [noturno, setNortuno] = useState(false)
  const [modo, setModo] = useState(false)


 useEffect( () => {
    const recuperarModo = async () => {
      const estadoModo = await AsyncStorage.getItem('modo')
      setNome(estadoModo)    
    };


    recuperarModo();
  }, []);


  const gravaModo = async () => {
    setModo(input)
    await AsyncStorage.setItem('modo', input);
    Keyboard.dismiss();
    alert('Salvo com sucesso!');
  }


function CaixaDeTexto() {
    if(noturno == true && capslk == false){
    return(
  
         <View style={styles.box2}>
        <Text style={styles.noite1}>A vigança nunca é plena, mata a alma e a envenena</Text>

        </View>
    
    ) }
    if(noturno == true && capslk == true){
    return(
  
         <View style={styles.box2}>
        <Text style={styles.noite2}>A vigança nunca é plena, mata a alma e a envenena</Text>

        </View>
    
    ) }
    if(noturno == false && capslk == true){
    return(
  
         <View style={styles.box1}>
        <Text style={styles.dia2}>A vigança nunca é plena, mata a alma e a envenena</Text>

        </View>
    
    ) }
        if(noturno == false && capslk == false){
    return(
  
         <View style={styles.box1}>
        <Text style={styles.dia1}>A vigança nunca é plena, mata a alma e a envenena</Text>

        </View>
    
    ) }
    
    
    
}

  return(
    <ScrollView>
    <View style={{ marginTop: 20 }}>
      <Text style={{fontSize: 28, color: 'red', textAlign: 'center'}}>
        Frases
    </Text>
    </View>

  
    <View style={styles.area}>
      <Text style={styles_r.texto_r}> Aumentar Fonte: </Text>
      <Switch 
      value={capslk}
      onValueChange={ (valorSwitch) => setCapslk(valorSwitch)}
      />
      
      <Text style={styles_r.texto_r}> Modo Nortuno: </Text>
      <Switch 
      value={noturno}
      onValueChange={ (valorSwitch) => setNortuno(valorSwitch) }
      />  
    </View>
    <CaixaDeTexto/>
    
     


    </ScrollView>
  )
}



const styles = StyleSheet.create({
  box1:{
      borderWidth:3,
      width: 320,
      height: 230,
      alignSelf: 'center',
      resizeMode: 'contain'
  },
  box2:{
      borderWidth:3,
      width: 320,
      height: 230,
      alignSelf: 'center',
      resizeMode: 'contain',
      backgroundColor: 'black'
  },
  dia1:{
      margin: 5,
      fontSize: 20,
      marginLeft: 15,
    },
    dia2:{
      margin: 5,
      fontSize: 40,
      marginLeft: 15,
    },
    noite1:{
      margin: 5,
      fontSize: 20,
      marginLeft: 15,
      color: 'white'
    },
    noite2:{
      margin: 5,
      fontSize: 40,
      marginLeft: 15,
      color: 'white'
    }

});

const styles_r = StyleSheet.create({
  texto_r: {
    textAlign: 'left',
    fontSize: 25,
  },
});