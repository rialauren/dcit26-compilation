import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.textHeader}>Developers</Text>
      <Image style={styles.imageStyle} source={require('../assets/bergado.jpg')} />
        <Text style={styles.text}>Vivielyn P. Bergado</Text>
        <Text style={styles.content}>
          {'\n'}     Ms. Vivielyn P. Bergado was born on March 6, 2000 in Macaraig Maternity Clinic, Indang, Cavite. She is the 5th child of Mr. Vicente M. Bergado and Mrs. Angelina P. Bergado. She currently lives in Buna Lejos I, Indang, Cavite. {'\n'}     In the year of 2012, she finished her primary education at Buna Lejos Elementary School, and in the year of 2016, she completed her secondary education at Perpetual Cavite Institute (PCI). In addition, she finished her Senior High Degree in the year 2018 at Amore International Academy, taking up Computer System Servicing course in the strand of Technical-Vocational-Livelihood (TVL).
        </Text>
        
        <Image style={styles.imageStyle} source={require('../assets/chua.jpg')} />
        <Text style={styles.text}>James Ashley D. Chua</Text>
        <Text style={styles.content}>
          {'\n'}      Mr.James Ashley D. Chua was born on June 19, 2000 in Tagaytay Hospital in Tagaytay City, Cavite. He is the 1st child of Mr. Johnson G. Chua and Mrs. Agnes D. Chua. He is currently living at Barangay Talon, Amadeo, Cavite. {'\n'}    In the year of 2012, he finished his primary education at Talon Elementary School , and in the year of 2016, he completed his secondary education at Talon National High School. In addition, he finished his Senior High Degree in the year 2018 at Talon National High School, taking up General Academic Strand (GAS).
        </Text>

        <Image style={styles.imageStyle} source={require('../assets/sales.jpg')} />
        <Text style={styles.text}>Ria Lauren A. Sales</Text>
        <Text style={styles.content}>
          {'\n'}     Ria Lauren A. Sales was born on October 17, 1999 in Divine Grace Hospital and Maternity Rosario, Cavite. She is the 2nd child of Mr. Ricardo P. Sales and Mrs. Gigi A. Sales. She currently lives in  Mulawin, Tanza, Cavite.  {'\n'}    In the year of 2012, she finished her primary education at Saint Augustine School (SAS), and in the year of 2016, she completed her secondary education at Saint Augustine School (SAS) also. In addition, she finished her Senior High Degree in the year 2018 at Saint Augustine School Senior High School (SAS-SHS), taking up Science, Technology, Engineering and Mathematics (STEM).
        </Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageStyle: {
    height: 200,
    width: 200,
    opacity: 2,
    alignContent: 'center',
    padding: 20,
    marginVertical: 20,
    borderRadius: 100,
  },
  text: {
    fontFamily: 'Agency FB',
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
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
    fontSize: 60,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Agency FB',
    fontWeight: 'bold'
  },
});
