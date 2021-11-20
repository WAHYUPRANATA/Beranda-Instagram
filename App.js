import React, { Component } from "react";
import { View, Text, Image, TextInput, StyleSheet} from "react-native";
import foto from './ig.jpg';
import { style } from "./style";

const App = () => {
  return (
    <View >
       <Photo/>
    <Teks/>
    {/* <Text style={style.tulisanku}>Selamat Datang</Text> */}
    {/* <Image source={{uri:'https://placeimg.com/100/100/nature'}} style={{width:100, height:100}}></Image> */}
    <TextInput style={{borderWidth:1 }}>Add Coments</TextInput>
   
    {/* <Tampilan/>
    <Tulisan/>
    <Photoku/> */}
    </View>
  );
}

const Teks = () => {
  return (
    <Text>View all 765 coment</Text>
  )
}

const Photo = () => {
  return (
    <Image source={foto} style={{width:320, height:435}}/>
  )
}

const Tampilan = () => {
  return (
    <View style={{width:100, height:100, backgroundColor:'green'}}/>
  )
}

class Tulisan extends Component {
  render () {
    return (
        <Text>Tampilan dari komponen class</Text>
    )
  }
}

class Photoku extends Component {
  render () {
    return (
      <Image source={{uri:'https://placeimg.com/100/100/tech'}} style={{width:200, height:200}}/>
    )
  }
}

export default App;