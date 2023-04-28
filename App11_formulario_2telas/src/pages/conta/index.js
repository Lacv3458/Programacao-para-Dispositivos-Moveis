import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Sobre( {route} ){
  const navigation = useNavigation();


  return(
    <View>
      <Text style={styles_r.texto_r}>Nome: {route.params?.nome}</Text>
      <Text style={styles_r.texto_r}>Idade: {route.params?.idade}</Text>
      <Text style={styles_r.texto_r}>Sexo: {route.params?.sexo}</Text>
      <Text style={styles_r.texto_r}>Escolaridade: {route.params?.escolaridade}</Text>
      <Text style={styles_r.texto_r}>Valor: {route.params?.valor}</Text>
      <Text style={styles_r.texto_r}>Brasileiro: {route.params?.brasileiro == 1? <Text>É Brasileiro</Text> : <Text>Não é Brasileiro</Text>}</Text>
      <Button
      title='Voltar para tela Home'
      onPress={ () => navigation.goBack() }
      />
    </View>
  )
}

const styles_r = StyleSheet.create({
  texto_r: {
    textAlign: 'left',
    fontSize: 25,
  },
});