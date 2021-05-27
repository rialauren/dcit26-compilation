import React from 'react';
import { useState, useEffect } from 'react';
import { Text, ScrollView, StyleSheet, Image, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import Home from '../screens/Home';

const Profile = ({ route }) => {
  
  const data = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        <Image source={{ uri: data.picture.medium }} style={styles.image} />
        <Text style={styles.text}>
          {'\n'}
          {data.name.first} {data.name.last}
          {'\n'}
          {'\n'}
        </Text></Text>

        <Text style={styles.info}>
          <Text style={styles.textTitle}>
            <EvilIcons name="user" size={40} color="Black" />
            About{'\n'}
          </Text>
          Age: {data.dob.age}
          {'\n'}
          Birthday: {data.dob.date}
          {'\n'}
          Gender: {data.gender}
          {'\n'}
          Address: {data.location.city}, {data.location.state}{'\n'}
          {'\n'}
          <Text style={styles.textTitle}>
            <EvilIcons name="envelope" size={40} color="Black" />
            Contact{'\n'}
          </Text>
          Email: {data.email}
          {'\n'}
          Phone: {data.phone}
          {'\n'}
          {'\n'}
          <Text style={styles.textTitle}>
            <EvilIcons name="plus" size={40} color="Black" />
            Others{'\n'}
          </Text>
          Date Registered: {data.registered.date}
          {'\n'}
        </Text>
      }
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'justify',
    justifyContent: 'justify',
    backgroundColor: 'white',
  },
  content: {
    fontFamily: 'Agency FB',
    color: 'black',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    fontSize: 20,
  },
  image: {
    height: 200,
    width: 250,
    opacity: 2,
    textAlign: 'center',
    alignContent: 'center',
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  text: {
    fontFamily: 'Agency FB',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    fontFamily: 'Agency FB',
    color: 'black',
    fontSize: 20,
    marginHorizontal: '5%',
  },
  textTitle: {
    fontFamily: 'Agency FB',
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
