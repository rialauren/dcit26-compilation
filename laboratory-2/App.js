// BSCS 3-4 
// Bergado, Vivielyn P.
// Chua, James Ashley D. 
// Sales, Ria Lauren A. 

import React, { useState } from 'react';
import{ View, Text, TextInput, StyleSheet, Button, ScrollView} from 'react-native';

export default function App(){
  const [item, setItem] = useState([]);
  const [enteredText, setenteredText] = useState([]);
    
  function TextHandler(enteredText) {
      setenteredText(enteredText);
  }
  function addListHandler(enteredItem) {
      setItem(enteredItem => [...enteredItem, enteredText])
      setenteredText('');
  }
  return( 
    <View style={styles.layout}>
      <View style={styles.container}>
        <TextInput 
          placeholder="Enter Item" 
          style={styles.text} 
          onChangeText={TextHandler}
          value={enteredText}/>
        <Button title = "Add" 
          onPress={addListHandler}
          color='#dec19b'/>
      </View>
      <View>
        { item.map((text) =>
        <View key = {text} style={styles.list}> 
        <Text>{text}
        </Text>
        </View>)}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#f3ebe1',
    padding: 50
  },
  container: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center'
  },
  text:{
    borderColor:'#d5b895',
    borderWidth: 2, 
    padding: 10
  },
  list:{
    padding: 10,
    marginVertical: 3,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#dec19b',
    borderColor: '#c68863'
  }
});
