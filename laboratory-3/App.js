//BSCS 3-4
//Bergado, Vivielyn P.
//Chua, James Ashley D.
//Sales, Ria Lauren A. 

import React, {useState}from 'react';
import { View, Button, StyleSheet } from 'react-native';

import SampleModal from './components/SampleModal';

export default function App(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
  <View style={styles.container}>
  <Button title="Click Me" onPress={() => setIsModalOpen(true)} />
  <SampleModal visible={isModalOpen} onClose={() => setIsModalOpen(false)}/>
  </View> 
  );
}

const styles = StyleSheet.create({
   container: {
   flex: 1,
   alignItems: 'center',
   justifyContent: 'center'
   }
});
