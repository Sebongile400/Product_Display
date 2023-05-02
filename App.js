
import { StyleSheet, Text, View, StatusBar, Image  } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import Buying from './components/Buying';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function App() {
 const Products ={

  MyImage: require('./assets/Burger1.jpg')


 };

  return (
    <View style={styles.container}>
      <StatusBar/>
      
      <Header/>
      <Image style={styles.MyImage} source={Products.MyImage} />
      <View style={styles.CNames}>
        <Text style={styles.Name}>Seatlana Burgers</Text>
        <Text style={styles.Price}> R50/item</Text>
      </View>
      <View style={styles.InBuying}>
        <Buying/>
      </View>
      <View style={styles.MyIcons}>
      <Entypo name="home" size={24} color="black" />
      <FontAwesome name="search" size={24} color="black" />
      <FontAwesome5 name="heart" size={24} color="black" />
      <Octicons name="person" size={24} color="black" />

      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:10,
   
  },
  
  MyImage: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 20
    
  },
  CNames:{
  marginLeft:50,

  },
  Name:{
    fontSize:25,
    fontWeight:'bold',
    

  },
  InBuying:{
    marginTop:10,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderTopWidth:2,
    borderBottomWidth:2,

  },
  Price:{
    marginLeft: 80,
  },
  MyIcons:{
    flexDirection: 'row',
    padding:10,
    justifyContent: 'space-between'
  }
});
