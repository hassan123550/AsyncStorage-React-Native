import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const App = () => {
 
  const [user,setUser] = useState('');

const setData = async () => {
   await AsyncStorage.setItem("user","Hassan Ali");
};

const getData = async () => {
    const name = await AsyncStorage.getItem("user");
     setUser(name);
};

const removeData = async () => {
  await AsyncStorage.removeItem('user');
  setUser('');
};

return (
      <View style={styles.container}>
        <Text style={styles.title}>AsyncStorage With React Native | {user}</Text>
        <Button title='Set Data' onPress={setData}/>
        <Text></Text>
        <Button title='Get Data' onPress={getData}/>
        <Text></Text>
        <Button title='Remove Data' onPress={removeData}/>
      </View>
    )

};
   
const styles = StyleSheet.create({
     container:{
      flex:1,
    justifyContent:'center',
    alignItems:'center'
     },
title:{
  fontSize:20,
  color:'#fff',
  marginBottom:50,
}
});
export default App;
