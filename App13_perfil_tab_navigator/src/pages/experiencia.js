import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';


export default function Experiencia() {
 const [nome] = useState('Luan Alejandro Cardoso Vazquez Gil')
  const [experiencia] = useState('Nenhuma')
  const [projetos] = useState('Desevolvimento de um jogo digital como trabalho de conclusão de curso na Etec')
 return (
    <View style={{ marginTop: 20 }}>
     <Text>Experiência</Text>

     

    <ImagemPerfil/>
    <Text style={{ fontSize: 30 }}>{nome}</Text>
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
  );
  


}

function ImagemPerfil() {  
    let img = 'https://siga.cps.sp.gov.br/image//LE6FXVQE4AL5N8SWS3559AXJJH4MM3.TMB.JPG';

    return(
        <Image
        source={{ uri: img }}
        style={{ width: 150, height: 150}}
      />
    )
}