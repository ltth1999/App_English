import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux'

const ProfileScreen = () => {
  
  const navigation = useNavigation()
  
  const dataUser = useSelector(state=>state.User.EditProfile)
  console.log("dataUser:",dataUser);
    return (
      
      <SafeAreaView style={styles.container}>
        <View style ={styles.container}>
          <View style={styles.userInfoSection}>
          <View style={{flexDirection: 'row', marginTop: 15}}>
          
            <Avatar.Image 
            source={{
              uri: 'https://file.vfo.vn/hinh/2014/10/avatar-buon-khoc-1.png'
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{dataUser && dataUser.firstName} {dataUser && dataUser.lastName}</Title>
            <Caption style={styles.caption}>EE</Caption>
          </View>
            </View>
            </View>
        </View>
        <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{dataUser && dataUser.country}</Text>
        </View>
       
        <View style={styles.row}>
          <Icon name="calendar-range" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{dataUser && dataUser.date}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{dataUser && dataUser.phone}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{dataUser && dataUser.email}</Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>80</Title>
            <Caption>Following</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>100</Title>
            <Caption>Followers</Caption>
          </View>
      </View>
      <View style={styles.menuWrapper}>
      <TouchableRipple onPress={()=>navigation.navigate('BookmarkScreen')}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Your Favorites</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={()=>navigation.navigate('SupportScreen')}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Support</Text>
          </View>
        </TouchableRipple>
      <TouchableRipple onPress={()=>navigation.navigate('SettingsScreen')}>
          <View style={styles.menuItem}>
            <Icon name="bell-outline" color="#FF6347" size={25}/>
            <Text style={styles.menuItemText}>Notifications</Text>
          </View>
        </TouchableRipple>
     
      </View>
      
      </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});