import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
    
      <Text style={styles.content}>
      {'\n'}      This application made by the persons in the profile serves as a laboratory exercise in DCIT26 - Application Development and Emerging Technology. {'\n'}

      {'\n'}     This application briefly talks about the friendship built during the developers' college days.

      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    fontFamily: 'Agency FB',
    color: 'black',
    textAlign: 'justify',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    fontSize: 20
  },
});
