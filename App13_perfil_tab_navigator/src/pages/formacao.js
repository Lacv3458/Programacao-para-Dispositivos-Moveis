import React, { useState } from 'react';
import { View, Text, Image } from 'react-native';


export default function Formacao() {
  const [nome] = useState('Luan Alejandro Cardoso Vazquez Gil')
  const [escola] = useState('ETEC Aristóteles Ferreira')
 return (
    <View style={{ marginTop: 20 }}>
     <Text>Formação</Text>

     

    <ImagemPerfil/>
    <Text style={{ fontSize: 30 }}>{nome}</Text>
    <Text style={{fontSize: 25}}>
      Formação:
    </Text>
    <Text style={{fontSize: 15, margin: 10}}>
          {escola}
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