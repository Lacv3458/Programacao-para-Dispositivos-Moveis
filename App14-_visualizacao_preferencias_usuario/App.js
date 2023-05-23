import React, { useState, useEffect } from 'react'
import { View,  Text, StyleSheet,  ScrollView} from 'react-native';
import { Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'



export default function App(){

  const [capslk, setCapslk] = useState(false)
  const [noturno, setNortuno] = useState(false)
  


 useEffect( () => {
    const recuperarModo = async () => {
      const estadoModo = await AsyncStorage.getItem('modo')
      setNome(estadoModo)    
    };


    recuperarModo();
  }, []);


  useEffect(() => {
    getData();
    //alert('Abriu o App');
  }, []);

  useEffect(() => {
    //alert('Alterou os valores');
    setData();
  }, [capslk, noturno]);

  async function setData() {
    await AsyncStorage.setItem('dia', String(noturno));
    await AsyncStorage.setItem('pequeno', String(capslk));
  }

  async function getData() {
    const dia = await AsyncStorage.getItem('dia');
    const pequeno = await AsyncStorage.getItem('pequeno');

    setNortuno(dia === 'true' && true);
    setCapslk(pequeno === 'true' && true);
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

    <View style={[styles.box, noturno && styles["bg-light"]]}>
        <Text style={[styles.boxText, noturno && styles["text-dark"], capslk && styles.big]}>
          A vingança nunca é plena, mata a alma e envenena!
        </Text>
      </View>
     


    </ScrollView>
  )
}



const styles = StyleSheet.create({
 switch: {
    transform: [{ scale: 1.5 }]
  },
  "bg-light": {
    backgroundColor: "#fff"
  },
  "text-dark": {
    color: "#000"
  },
  box: {
    padding: 16,
    borderColor: "#000",
    borderWidth: 1,
    backgroundColor: "#000",
    flex: 1
  },
  boxText: {
    color: "#fff",
    fontSize: 22,
  },
  big: {
    fontSize: 32
  }

});

const styles_r = StyleSheet.create({
  texto_r: {
    textAlign: 'left',
    fontSize: 25,
  },
});