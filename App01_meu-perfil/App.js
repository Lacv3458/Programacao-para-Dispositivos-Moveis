import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';


class App extends Component{
  render(){


    let nome = 'Luan Alejandro Cardoso Vazquez Gil';
    let img = 'https://media.licdn.com/dms/image/D4D03AQGTrM8gYbZeSQ/profile-displayphoto-shrink_200_200/0/1673553752381?e=1682553600&v=beta&t=zRBHMEMXzjFNJIimwduMuKaRgP6J5HRYdO0JZdKoOwE';


    return(
      <View>
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300}}
        />


      <Text style={{ fontSize: 30 }}>{nome}</Text>
      <Text style={{fontSize: 25}}>
          Dados pessoais:
        </Text>
      <Text style={{fontSize: 15, margin: 10}}>
          Data Nascimento: 24/08/2002{'\n'}Idade: 20
        </Text>

      <Text style={{fontSize: 25}}>
          Formação:
        </Text>
      <Text style={{fontSize: 15, margin: 10}}>
          ETEC Aristóteles Ferreira
        </Text>

      <Text style={{fontSize: 25}}>
          Experiência:
        </Text>
      <Text style={{fontSize: 15, margin: 10}}>
         Nenhuma
        </Text>
       
       <Text style={{fontSize: 25}}>
          Projetos:
        </Text>
      <Text style={{fontSize: 15, margin: 10}}>
          Desevolvimento de um jogo digital como trabalho de conclusão de curso na Etec
        </Text>


      </View>
    )
  }
}


export default App;
