import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text} from 'react-native';


class App extends Component{
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.titulo}>Anuncio</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style ={{borderWidth:3, height: 350}}>
        <View style={styles.box1}>
        <Imagem1 />
        <Text style={styles.label}>Garfield Deitado</Text>
        </View>

        <View style={styles.box1}>
        <Imagem2 />
        <Text style={styles.label}>Garfield le dando os Parabens</Text>
        </View>

        <View style={styles.box1}>
        <Imagem3 />
        <Text style={styles.label}>Garfield com a Bola Toda</Text>
        </View>

        <View style={styles.box1}>
        <Imagem4/>
        <Text style={styles.label}>Garfield sabe o que Você fez no Verão de 1998</Text>
        </View>
        
        </ScrollView>
      </View>
    )
  }
}

function Imagem1() {  
    let img = 'https://media.gazetadopovo.com.br/2017/03/ebc136c4e48ff4be0f8e5ed02eebdd75-gpLarge.png';


    return(
        <Image
        source={{ uri: img }}
        style={styles.imagem}
        />
    )
}
function Imagem2() {  
    let img = 'https://conteudo.imguol.com.br/c/entretenimento/31/2018/08/07/garfield-completou-40-anos-em-2018-1533662101613_v2_4x3.jpg';


    return(
        <Image
        source={{ uri: img }}
        style={styles.imagem}
      />
    )
}
function Imagem3() {  
    let img =  'https://sm.ign.com/t/ign_br/news/n/new-animat/new-animated-garfield-movie-announced_rwef.1200.jpg';


    return(
        <Image
        source={{ uri: img }}
        style={styles.imagem}
      />
    )
}
function Imagem4() {  
    let img = 'https://ogimg.infoglobo.com.br/in/20999917-b9a-454/FT1086A/760/garfield.jpg';


    return(
        <Image
        source={{ uri: img }}
        style={styles.imagem}
      />
    )
}

const styles = StyleSheet.create({
    imagem:{
      flex: 1,
      width: 200,
      height: 300,
      alignSelf: 'center',
      resizeMode: 'contain'
  },
  box1:{
      borderWidth:3,
      flex: 1,
      width: 320,
      height: 200,
      alignSelf: 'center',
      resizeMode: 'contain'
  },
  titulo:{
      fontSize: 18,
      color: 'orange',
      alignSelf: 'center',
      marginTop: 15
    },
    label:{
      alignSelf: 'center',
      margin: 5,
      fontSize: 20,
      marginLeft: 15,
    }

})


export default App;