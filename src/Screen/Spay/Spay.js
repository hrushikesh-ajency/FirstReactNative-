import React from 'react';
import { Text ,TouchableOpacity,Image,View,ScrollView,BackHandler} from 'react-native';
import { swiperStyles,styles } from '../../style/Style';




export class Spay extends React.Component {
  
  constructor(props){
    super();
    this.state = { counter: 0 }
  }

    render(){

    return (
        <View style={{justifyContent:'center',margin:100}}>
        <TouchableOpacity
        onPress={()=>this.setState({counter:this.state.counter+1})}
        style={{marginBottom:10,marginTop:10,backgroundColor:'lightblue',height:40}}
        >
        <Text>
        Increment
        </Text>
        </TouchableOpacity>
        <Text style={{marginLeft:110}}>
          {this.state.counter}
        </Text>
        <TouchableOpacity
        onPress={()=>this.setState({counter:this.state.counter-1})}
        style={{marginBottom:10,marginTop:10,backgroundColor:'lightblue',height:40}}
        >
        <Text>
        Decrement
        </Text>
        </TouchableOpacity>
        </View>
    )
    }}