import React, { useState } from 'react';
import { View, Text, Button, Image} from 'react-native';


export default function App(){
  const [nome] = useState('Luan Alejandro Cardoso Vazquez Gil')
  const [dtNascimento] = useState('24/08/2002')
  const [idade] = useState(20)
  const [escola] = useState('ETEC Aristóteles Ferreira')
  const [experiencia] = useState('Nenhuma')
  const [projetos] = useState('Desevolvimento de um jogo digital como trabalho de conclusão de curso na Etec')

  return(
    <View style={{ marginTop: 20 }}>

    <ImagemPerfil/>
    <Text style={{ fontSize: 30 }}>{nome}</Text>
    <Text style={{fontSize: 25}}>
      Dados pessoais:
    </Text>

    <Text style={{fontSize: 15, margin: 10}}>
         Data Nascimento: {dtNascimento}
         {'\n'}
         Idade: {idade}
    </Text>

    <Text style={{fontSize: 25}}>
          Formação: 
    </Text>
    <Text style={{fontSize: 15, margin: 10}}>
          {escola}
    </Text>   

    <Text style={{fontSize: 25}}>
          Experiência:
    </Text>
    <Text style={{fontSize: 15, margin: 10}}>
         {experiencia}
    </Text>

    <Text style={{fontSize: 25}}>
          Projetos:
    </Text>
    <Text style={{fontSize: 15, margin: 10}}>
         {projetos}
    </Text>

     
    </View>
  )
}

function ImagemPerfil() {  
    let img = 'https://media.licdn.com/dms/image/D4D03AQGTrM8gYbZeSQ/profile-displayphoto-shrink_200_200/0/1673553752381?e=1682553600&v=beta&t=zRBHMEMXzjFNJIimwduMuKaRgP6J5HRYdO0JZdKoOwE';


    return(
        <Image
        source={{ uri: img }}
        style={{ width: 300, height: 300}}
      />
    )
}


