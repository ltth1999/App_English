import React, {Component} from 'react';
import {
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity,
  StatusBar,
  StyleSheet} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';


const ExamScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: '#2ECCFA'}}>
       <StatusBar barStyle="dark-content"/>
         <View
          style={{
            backgroundColor: '#81c04d',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <Ionicons.Button name="ios-menu" size={25} backgroundColor='#81c04d' 
        onPress={() => navigation.openDrawer()}></Ionicons.Button>
        <Text style={{fontSize: 20, color: 'white', fontWeight:'bold'}}>Exam</Text>
       
      </View> 
        
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 60,
          }}>
          <Text style={{color: 'black', fontSize: 20}}>Please choose the test</Text>
        </View>
        
      <View style={styles.topicContainer}>
        <TouchableOpacity
          style={styles.topicBtn}
          onPress={() =>
            navigation.navigate('playquiz')
          }>
          <View style={styles.topicIcon}>
            <Ionicons name="newspaper-outline" size={35} color="green" />
          </View>
          <Text style={styles.topicBtnTxt}>Test 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topicBtn}
          onPress={() =>
            navigation.navigate('playquiz1')
          }>
          <View style={styles.topicIcon}>
            <Ionicons
              name="newspaper-outline"
              size={35}
              color="green"
            />
          </View>
          <Text style={styles.topicBtnTxt}>Test 2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topicBtn}
          onPress={() =>
            navigation.navigate('playquiz2')
          }>
          <View style={styles.topicIcon}>
          <Ionicons name="newspaper-outline" size={35} color="green" />
          </View>
          <Text style={styles.topicBtnTxt}>Test 3</Text>
        </TouchableOpacity>

      </View>
      <View style={[styles.topicContainer, {marginTop: 10}]}>
      <TouchableOpacity
          style={styles.topicBtn}
          onPress={() =>
            navigation.navigate('playquiz3')
          }>
          <View style={styles.topicIcon}>
          <Ionicons name="newspaper-outline" size={35} color="green" />
          </View>
          <Text style={styles.topicBtnTxt}>Test 4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.topicBtn}
          onPress={() =>
            navigation.navigate('playquiz4')
          }>
          <View style={styles.topicIcon}>
          <Ionicons name="newspaper-outline" size={35} color="green" />
          </View>
          <Text style={styles.topicBtnTxt}>Test 5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.topicBtn} 
        onPress={() => 
          navigation.navigate('playquiz5')
          }>
          <View style={styles.topicIcon}>
            <Ionicons name="newspaper-outline" size={35} color="green" />
          </View>
          <Text style={styles.topicBtnTxt}>Test 6</Text>
        </TouchableOpacity>
      </View>

      </ScrollView>
    </View>
  );
};
export default ExamScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topicContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 10,
  },
  topicBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
   
  },
  topicIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fdeae7' /* '#FF6347' */,
    borderRadius: 50,
  },
  topicBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: 'green',
  },

});
