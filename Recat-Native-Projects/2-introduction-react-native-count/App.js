import * as React from 'react';
import {  View, StyleSheet,Text,Button,Alert } from 'react-native';
import Count from './Component/Count';


export default function App() {
  const learnMoreHandler = () => {
    Alert.alert('Simple Button pressed')
  }
  return (
    // <View style={styles.container}>
    //     <View style={styles.containerItem}>
    //       <Text>Div 1</Text>
    //     </View>

    //     <View style={[styles.containerItem,styles.containerItem2]}>
    //       <Text>Div 2</Text>
    //     </View>

    //     <View style={styles.containerItem}>
    //       <Text>Div 3</Text>
    //     </View>

    //     <Button  
    //     title="Learn More" 
    //     color="#841584"
    //     accessibilityLabel="Learn more about this purple button"
    //     onPress={learnMoreHandler}
    //     />
    // </View>

    <Count />
  );
}

const styles = StyleSheet.create({
  container: {
    display:"flex",
    flexDirection:"row",
    // justifyContent:'center',
    // justifyContent:'space-between',
    // justifyContent:'space-evenly',
    // justifyContent:'flex-start',
    // justifyContent:'flex-end',
    height:200,
    alignItems:"center"
  },
  containerItem:{
    border:"1px solid",
    // flexGrow:"1"
  },
  containerItem2:{
    // flexGrow:3
    alignSelf:"flex-start"
  }
});
