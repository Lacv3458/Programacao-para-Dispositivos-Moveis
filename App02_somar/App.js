
import React, { useState } from 'react';
import { View, Text, Button} from 'react-native';


export default function App(){
  const [contador, setContador] = useState(0)


  function mais() {
    setContador(contador+1)
  }
  function menos() {
    if(contador>0)
    {
    setContador(contador-1)
    }
    
  }


  return(
    <View style={{ marginTop: 20 }}>
      <Text style={{fontSize: 28, textAlign: 'center'}}>
        Contador de Pessoas
      </Text>

      <Text style={{fontSize: 100, color: 'red', textAlign: 'center'}}>
        {contador}
      </Text>

      <Button color= "green" title="+" onPress={mais} />
      <Button color= "red" title="-" onPress={menos} />

    </View>
  )
}

