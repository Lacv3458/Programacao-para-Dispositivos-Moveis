import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Conta from './src/pages/aberturaConta';
import Dados from './src/pages/conta';


const Stack = createStackNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Abertura de Conta" component={Conta} />
        <Stack.Screen name="Dados Informados" component={Dados} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}