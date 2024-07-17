import React,{useState} from 'react';
import {View,StyleSheet,Text,TouchableOpacity} from 'react-native';

const Count = () => {
  const [count,setCount] = useState(0);
  const incrementHandler = () => {
    setCount(count => count + 1);
  }

  const decrementHandler = () => {
    if(count <= 0){
      return null;
    }
    setCount(count =>count - 1);
  }
  return <View style={styles.container}>
        <Text style={styles.bigBlue}>{count}</Text>
        
        <TouchableOpacity onPress={incrementHandler}>
          <Text style={styles.incrementBtn}>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={decrementHandler}>
          <Text style={styles.incrementBtn}>Decrement</Text>
        </TouchableOpacity>
  </View>;
}


const styles = StyleSheet.create({
  container:{
    marginTop:90
  },
  bigBlue: {
    color: "green", 
    fontWeight: "bold",
    fontSize: 40,
    textAlign:"center",
  },
  incrementBtn:{
    color:"white",
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
    backgroundColor:"blue",
    marginBottom:20
  },
});
export default Count;