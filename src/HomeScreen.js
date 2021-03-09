import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

import paris from "../assests/images/paris.png";



import Styles from './../styles/Styles';

const HomeScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#FF6347">
          <View style={styles.slide}>
            <Image
              source={require('./asset/banners/banner1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('./asset/banners/banner2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('./asset/banners/banner3.jpg')}
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
            navigation.navigate('TopicSport', {title: 'Sports'})
          }>
          <View style={styles.topicIcon}>
            <Ionicons name="ios-baseball" size={35} color="#FF6347" />
          </View>
          <Text style={styles.topicBtnTxt}>Sports</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topicBtn}
          onPress={() =>
            navigation.navigate('TopicHealth', {title: 'Health'})
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
            navigation.navigate('TopicWork', {title: 'Work'})
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
            navigation.navigate('TopicRomance', {title: 'Romance'})
          }>
          <View style={styles.topicIcon}>
          <Fontisto name="heart-eyes" size={35} color="#FF6347" />
          </View>
          <Text style={styles.topicBtnTxt}>Romance</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.topicBtn}
          onPress={() =>
            navigation.navigate('TopicFriendship', {title: 'Friendship'})
          }>
          <View style={styles.topicIcon}>
          <Fontisto name="persons" size={35} color="#FF6347" />
          </View>
          <Text style={styles.topicBtnTxt}>Friendship</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.topicBtn} onPress={() => navigation.navigate('ShowMore', {title: 'Show More'})
          }>
          <View style={styles.topicIcon}>
            <MaterialIcons name="expand-more" size={35} color="#FF6347" />
          </View>
          <Text style={styles.topicBtnTxt}>Show More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Recently Viewed
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TopicFriendship')
          }>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./image/banners/banner1.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Friendship</Text>
            <StarRating ratings={4} reviews={109} />
            <Text style={styles.cardDetails}>
            We all take different paths in life, but no matter where we go, we take a little of each other everywhere.
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TopicRomance')
          }>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./image/banners/banner2.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Romance</Text>
            <StarRating ratings={4} reviews={59} />
            <Text style={styles.cardDetails}>
            To the world you may be one person, but to one person you may be the world!
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TopicHousing')
          }>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./image/banners/banner3.png')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Housing</Text>
            <StarRating ratings={4} reviews={50} />
            <Text style={styles.cardDetails}>
             Inquire about buying, renting and some housing issues.
            </Text>
          </View>
        </View>
        </TouchableOpacity>
        <View style={Styles.viewContent}>
                    <View>
                        <Text style={Styles.textContent}>Bắt đầu với những bài học</Text>
                        {/* <TouchableOpacity style={Styles.touchContent}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Đặt mục tiêu</Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:35}} />
                        </TouchableOpacity> */}
                        <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2} 
                                        onPress={() => navigation.navigate('VocabularyList',{diff:'MEDIUM'})}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Bài tập cơ bản</Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:25}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2} 
                                        onPress={() => navigation.navigate('WordScreen',{diff:'HARD'})}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Bài tập nâng cao </Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:5}} />
                        </TouchableOpacity>                     
                    </View>
                    <Image source={paris}
                        style={Styles.imageContent} />
                </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

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

  wrapper: {},

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
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
