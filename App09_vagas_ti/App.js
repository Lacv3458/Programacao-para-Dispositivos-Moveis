import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text, TextInput} from 'react-native';


class App extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.titulo}>Anuncio</Text>
        <ScrollView showsHorizontalScrollIndicator={false} style ={{borderWidth:3}}>
        <View style={styles.box1}>
        <Text style={styles.titulo_job}>Programador</Text>
        <Text style={styles.label}>Salario: R$9999</Text>
        <Text style={styles.label}>Descrição: asdfasdfasdfasdf</Text>
        <Text style={styles.label}>Contato: (99) 9999-9999</Text>
        </View>

        <View style={styles.box1}>
        <Text style={styles.titulo_job}>Analista</Text>
        <Text style={styles.label}>Salario: R$9999</Text>
        <Text style={styles.label}>Descrição: asdfasdfasdfasdf</Text>
        <Text style={styles.label}>Contato: (99) 9999-9999</Text>
        </View>

        <View style={styles.box1}>
        <Text style={styles.titulo_job}>Secretario</Text>
        <Text style={styles.label}>Salario: R$9999</Text>
        <Text style={styles.label}>Descrição: asdfasdfasdfasdf</Text>
        <Text style={styles.label}>Contato: (99) 9999-9999</Text>        
        </View>

        <View style={styles.box1}>
        <Text style={styles.titulo_job}>Diretor</Text>
        <Text style={styles.label}>Salario: R$9999</Text>
        <Text style={styles.label}>Descrição: asdfasdfasdfasdf</Text>
        <Text style={styles.label}>Contato: (99) 9999-9999</Text>        
        </View>
        
        </ScrollView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  box1:{
      borderWidth:3,
      width: 320,
      height: 200,
      alignSelf: 'center',
      resizeMode: 'contain'
  },
  titulo:{
      fontSize: 18,
      color: 'red',
      alignSelf: 'center',
      marginTop: 15
    },
    titulo_job:{
      color: 'blue',
      margin: 5,
      fontSize: 20,
      marginLeft: 15,
    },
    label:{
      margin: 5,
      fontSize: 20,
      marginLeft: 15,
    }

})


export default App;
