import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import { Button } from 'react-native';
import About from '../screens/About';

const Stack = createStackNavigator();
const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.goBack()}
              name="chevron-back-circle"
              size={40}
              color="black"
            />
          ),
          title: 'About',
          headerStyle: {
            backgroundColor: '#19c2bf',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Agency FB',
            fontSize: 23,
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
