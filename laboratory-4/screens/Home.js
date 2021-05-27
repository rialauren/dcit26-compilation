import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textHeader}>WAKANDA</Text>
        <Image style={styles.imageStyle} source={require('../assets/wakanda.jpg')} />

        <Text style={styles.content}>
        {'\n'}      They were 3rd students of Cavite State University - Main Campus currently taking up Bachelor of Science in Computer Science. {'\n'}{'\n'}     They often say that the unexpected kind of friendship are the best ones and this circle of friends can prove that. We all do have our differences but we could say that despite of such differences, we still manage to get along with each other at most times.{'\n'}{'\n'}      Indeed a genuine friendship without any judgments who got each others back at all times.  {'\n'}{'\n'}
        </Text>
      </View>
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 200,
    width: 300,
    opacity: 2,
    alignContent: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  content: {
    fontFamily: 'Agency FB',
    color: 'black',
    textAlign: 'justify',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    fontSize: 20,
  },
  textHeader: {
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Jokerman',
  },

});
