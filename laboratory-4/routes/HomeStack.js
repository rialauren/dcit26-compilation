import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Ionicons
              onPress={() => navigation.toggleDrawer()}
              name="menu"
              size={40}
              color="black"
            />
          ),
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.navigate('Profile')}
              name="person-circle-outline"
              size={45}
              color="black"
            />
          ),
          title: 'Home',
          headerStyle: {
            backgroundColor: '#19c2bf',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Agency FB',
            fontSize: 30,
            fontWeight: 'bold'
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.goBack()}
              name="home"
              size={35}
              color="black"
            />
          ),
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#19c2bf',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Agency FB',
            fontSize: 30,
            fontWeight: 'bold'
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
