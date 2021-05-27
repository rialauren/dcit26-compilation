import React from 'react';
import {Button, Modal, Image, StyleSheet, Text,View, ScrollView, TouchableOpacity} from 'react-native';

const SampleModal = props => {
return (
  <Modal 
  animationType="fade"
  visible={props.visible}>
    <ScrollView>
      <View style={styles.content}>
        <Image style={styles.pic} 
        source={require('../assets/wakanda.jpeg')} 
        />
      </View>
      <Text style={styles.text}>
Third Laboratory Activity in DCIT 26 by the following students of BSCS 3-4: {'\n'}
Bergado, Vivielyn P., {'\n'}Chua James Ashley D., and, {'\n'}Sales, Ria Lauren A. {'\n'}{'\n'}     The image above shows their college group of friends which they chose to call as "Wakanda".
They were 3rd students of Cavite State University - Main Campus currently taking up Bachelor of Science in Computer Science. {'\n'}{'\n'}     They often say that the unexpected kind of friendship are the best ones and this circle of friends can prove that. We all do have our differences but we could say that despite of such differences, we still manage to get along with each other at most times.{'\n'}{'\n'}      Indeed a genuine friendship without any judgments who got each others back at all times.  {'\n'}{'\n'}      Some information about the developers of this application are as follows: {'\n'}{'\n'}     Ms. Vivielyn P. Bergado was born on March 6, 2000 in Macaraig Maternity Clinic, Indang, Cavite. She is the 5th child of Mr. Vicente M. Bergado and Mrs. Angelina P. Bergado. She currently lives in Buna Lejos I, Indang, Cavite. {'\n'}     In the year of 2012, she finished her primary education at Buna Lejos Elementary School, and in the year of 2016, she completed her secondary education at Perpetual Cavite Institute (PCI). In addition, she finished her Senior High Degree in the year 2018 at Amore International Academy, taking up Computer System Servicing course in the strand of Technical-Vocational-Livelihood (TVL). {'\n'}{'\n'}      Mr.James Ashley D. Chua was born on June 19, 2000 in Tagaytay Hospital in Tagaytay City, Cavite. He is the 1st child of Mr. Johnson G. Chua and Mrs. Agnes D. Chua. He is currently living at Barangay Talon, Amadeo, Cavite. {'\n'}    In the year of 2012, he finished his primary education at Talon Elementary School , and in the year of 2016, he completed his secondary education at Talon National High School. In addition, he finished his Senior High Degree in the year 2018 at Talon National High School, taking up General Academic Strand (GAS). {'\n'}{'\n'}     Ria Lauren A. Sales was born on October 17, 1999 in Divine Grace Hospital and Maternity Rosario, Cavite. She is the 2nd child of Mr. Ricardo P. Sales and Mrs. Gigi A. Sales. She currently lives in  Mulawin, Tanza, Cavite.  {'\n'}    In the year of 2012, she finished her primary education at Saint Augustine School (SAS), and in the year of 2016, she completed her secondary education at Saint Augustine School (SAS) also. In addition, she finished her Senior High Degree in the year 2018 at Saint Augustine School Senior High School (SAS-SHS), taking up Science, Technology, Engineering and Mathematics (STEM).  {'\n'}{'\n'} {'\n'}{'\n'}  
      </Text>
        <TouchableOpacity style={styles.button}>
        <Button
        color='red'
        title="Close" onPress={props.onClose}>
        </Button>
        </TouchableOpacity>
    </ScrollView>
  </Modal>
);
};
export default SampleModal;

const styles = StyleSheet.create ({
  content:{
    padding: 10
  },
  text:{
    fontSize: 17,
    fontFamily: 'sans-serif',
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10
  },
  pic: {
    alignSelf: 'center',
    padding: 10,
    width: 250,
    height: 200
  },
  button:{
    textAlign: 'center',
    alignSelf:'center',
  }
});