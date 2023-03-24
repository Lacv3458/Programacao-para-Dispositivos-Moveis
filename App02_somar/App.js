import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      num: 0
    };

this.somar = this.somar.bind(this);
this.subtrair = this.subtrair.bind(this);
  }
  
  somar(){
    this.setState({
      num: this.state.num + 1
    });
  }
  subtrair(numero){
    if(numero>0){
    this.setState({
     
      num: this.state.num - 1
      
    });
    };
  }


  render(){
    return(
      <View style={{ marginTop: 20 }}>
        <Text style={{fontSize: 28, textAlign: 'center'}}>
        Contador de Pessoas
        </Text>
          <Text style={{fontSize: 100, color: 'red', textAlign: 'center'}}>
          {this.state.num} 
        </Text>
        <Button title="+" color="green" onPress={() => this.somar()}  />
        <Button title="-" color="red" onPress={() => this.subtrair(this.state.num)} />

      </View>
    )
  }
}


export default App;