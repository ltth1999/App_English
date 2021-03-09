import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const ShowMore = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
    
    <View style={styles.sliderContainer}>
      <Swiper
        autoplay
        horizontal={false}
        height={200}
        activeDotColor="#FF6347">
        <View style={styles.slide}>
          <Image
            source={require('./asset/banners/banner3.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('./asset/banners/banner4.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('./asset/banners/banner5.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>

    <View style={styles.topicContainer}>
      <TouchableOpacity
        style={styles.topicBtn}
        onPress={() =>
          navigation.navigate('TopicSport')
        }>
        <View style={styles.topicIcon}>
          <Ionicons name="ios-baseball" size={35} color="#FF6347" />
        </View>
        <Text style={styles.topicBtnTxt}>Sports</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.topicBtn}
        onPress={() =>
          navigation.navigate('TopicHealth')
        }>
        <View style={styles.topicIcon}>
          <MaterialCommunityIcons
            name="heart-flash"
            size={35}
            color="#FF6347"
          />
        </View>
        <Text style={styles.topicBtnTxt}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.topicBtn}
        onPress={() =>
          navigation.navigate('TopicWork')
        }>
        <View style={styles.topicIcon}>
        <MaterialCommunityIcons name="briefcase" size={35} color="#FF6347" />
        </View>
        <Text style={styles.topicBtnTxt}>Work</Text>
      </TouchableOpacity>

    </View>
    <View style={[styles.topicContainer, {marginTop: 10}]}>
    <TouchableOpacity
        style={styles.topicBtn}
        onPress={() =>
          navigation.navigate('TopicRomance')
        }>
        <View style={styles.topicIcon}>
        <Fontisto name="heart-eyes" size={35} color="#FF6347" />
        </View>
        <Text style={styles.topicBtnTxt}>Romance</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.topicBtn}
        onPress={() =>
          navigation.navigate('TopicFriendship')
        }>
        <View style={styles.topicIcon}>
        <Fontisto name="persons" size={35} color="#FF6347" />
        </View>
        <Text style={styles.topicBtnTxt}>Friendship</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.topicBtn}
        onPress={() =>
          navigation.navigate('TopicHousing')
        }>
        <View style={styles.topicIcon}>
        <Fontisto name="home" size={35} color="#FF6347" />
        </View>
        <Text style={styles.topicBtnTxt}>Housing</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>

  );
};

export default ShowMore;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    sliderContainer: {
      height: 200,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    topicContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
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
      color: '#de4f35',
    },
  });
  
