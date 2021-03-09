import React, {Component} from 'react';
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from "react-native-vector-icons/AntDesign";
const TopicFriendship = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          backgroundColor: '#faebd7',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
      </View>
      <ScrollView style={{flex: 1, marginTop: 20}}>
        {/* <Text style={{color: 'red', fontSize: 18, alignItems: 'center', marginLeft: 110}}>Lesson Playing Golf</Text> */}
        <View
               style={{
                flexDirection:"row",
                backgroundColor: '#fff5ee',
                width: '96%',
                alignSelf:'center',
                borderRadius: 5,
                padding: 10,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 10,
                color: '#fff5ee',
                marginTop: 2
              }}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              marginLeft: 18,
            }}
            source={require('./image/topicFriendship/Lesson1_friendship.jpg')}
          />
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.List}>Running into a Friend  </Text>
          </View>
          <TouchableOpacity
              onPress={()=>navigation.navigate("BookmarkScreen" )}
              style={styles.heart}>
                <Ionicons 
                  name="heart-circle-outline"
                  color="red"
                  size={20}
                />
              </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('inSport')}
          style={styles.button}>
              <AntDesign 
                name="arrowright"
                color="green"
                size={15}
              />
          </TouchableOpacity>
        </View>

        <View
               style={{
                flexDirection:"row",
                backgroundColor: '#fff5ee',
                width: '96%',
                alignSelf:'center',
                borderRadius: 5,
                padding: 10,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 10,
                color: '#fff5ee',
                marginTop: 5,
                marginBottom: 10
              }}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              marginLeft: 18,
            }}
            source={require('./image/topicFriendship/Lesson2_friendship.png')}
          />
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.List}>Roommates</Text>
          </View>
          <TouchableOpacity
              onPress={()=>navigation.navigate("BookmarkScreen" )}
              style={styles.heart}>
                <Ionicons 
                  name="heart-circle-outline"
                  color="red"
                  size={20}
                />
              </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}>
              <AntDesign 
                name="arrowright"
                color="green"
                size={15}
              />
          </TouchableOpacity>
        </View>
        <View
               style={{
                flexDirection:"row",
                backgroundColor: '#fff5ee',
                width: '96%',
                alignSelf:'center',
                borderRadius: 5,
                padding: 10,
                shadowColor: '#ccc',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.5,
                shadowRadius: 5,
                elevation: 10,
                color: '#fff5ee',
                marginTop: 5,
                marginBottom: 10
              }}>
          <Image
            style={{
              width: 100,
              height: 100,
              resizeMode: 'cover',
              marginLeft: 18,
            }}
            source={require('./image/topicFriendship/Lesson3_friendship.jpg')}
          />
          <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.List}>Friendship </Text>
          </View>
          <TouchableOpacity
              onPress={()=>navigation.navigate("BookmarkScreen" )}
              style={styles.heart}>
                <Ionicons 
                  name="heart-circle-outline"
                  color="red"
                  size={20}
                />
              </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}>
              <AntDesign 
                name="arrowright"
                color="green"
                size={15}
              />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TopicFriendship;
const styles = StyleSheet.create({
  List: {color: 'blue', padding: 30, fontSize: 16, alignItems: 'center', fontWeight: 'bold'},
  button: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  heart: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
});
