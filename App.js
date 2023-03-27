import React from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacityBase, View } from 'react-native';



export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      weight: "",
      height: "",
    };
  }

  changeWeight = (value) => {
    this.setState({
      ...this.state,
      weight: value
    });
  }

  changeHeight = (value) => {
    this.setState({
      ...this.state,
      height: value
    });
  }

  verifyIMC = (imc) => {
    if (imc < 18.5) {
      return "unde the weight"
    } else if (imc >= 18.5 && imc < 25) {
      return "in normal weight"
    } else if (imc >= 25 && imc < 30) {
      return "over the weight"
    }
      return "obese"
  }

  clickCalculate = () => {

    if(this.state.height == ''){
      alert('Write a height')
      return
    }
    if(this.state.weight == ''){
      alert('Write a weight')
      return
    }

    let height = parseFloat(this.state.height);
    let weight = parseFloat(this.state.weight);

    let imc = weight / Math.pow(height, 2)
    
    alert(`Your IMC: ${imc} said that you are ${this.verifyIMC(imc)}`)
    
  }

  render(){
    return(<View>
      <Text style={styles.title}>My app for calculate the IMC</Text>
      
      <View style={styles.spacing}>

        <TextInput
        value={this.state.weight}
        onChangeText={this.changeWeight}
        placeholder='weight' 
        style={styles.input}/>
        

        <TextInput 
        onChangeText={this.changeHeight}
        placeholder='height' 
        style={styles.input}/>

      </View>
      <Button title='Calculate' style={styles.teste} onPress={this.clickCalculate}/>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    textAlign: 'center',
    fontSize:20,
    marginTop: 25
  },
  input:{
    backgroundColor: '#f4f4f4',
    borderColor: 'gray',
    borderWidth: 1,
    margin:15,
    paddingLeft:7,
    borderRadius:10,
    width:330,
    height: 37,
    alignSelf: 'center',
  },
  spacing:{
    marginTop:30
  },
  btnCalculate:{
    backgroundColor: 'black',
  },
});
