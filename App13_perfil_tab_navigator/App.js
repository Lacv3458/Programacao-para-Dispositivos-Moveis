import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
 
import Experiencia from './src/pages/experiencia';
import Formacao from './src/pages/formacao';
import Pessoal from './src/pages/pessoal';
 
const Tab = createBottomTabNavigator();

const icons = {
  Pessoal:{
    name: 'ios-person',
  },
  Formacao:{
    name: 'ios-school',
  },
  Experiencia:{
    name: 'ios-list',
  }
}

 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={ ({route}) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];
          return <Icon name={name} color={color} size={size} />
        }
      }) }
      >
        <Tab.Screen name='Pessoal' component={Pessoal} />
        <Tab.Screen name='Formacao' component={Formacao} />
        <Tab.Screen name='Experiencia' component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>

  )
}
