import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';


import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import EditProfileScreen from './EditProfileScreen';
import TopicSport from './TopicSport';
import TopicWork from './TopicWork';
import TopicHealth from './TopicHealth';
import TopicRomance from './TopicRomance';
import TopicFriendship from './TopicFriendship';
import ShowMore from './ShowMore';
import TopicHousing from './TopicHousing';
import inSport from '../components/inSport';
import PlaylistScreen from '../components/Audio/PlaylistScreen';
import BookmarkScreen from './BookmarkScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#FF6347',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-search" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Audio"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Audio',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-caret-forward-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'EasyEng',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={colors.background}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://file.vfo.vn/hinh/2014/10/avatar-buon-khoc-1.png',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
       <HomeStack.Screen
          name="TopicSport"
          options={{
            title: 'Sport',
          }}
          component={TopicSport}
        />   
         <HomeStack.Screen
          name="TopicHealth"
          options={{
            title: 'Health',
          }}
          component={TopicHealth}
        /> 
       <HomeStack.Screen
          name="TopicWork"
          options={{
            title: 'Work',
          }}
          component={TopicWork}
        /> 
          <HomeStack.Screen
          name="TopicRomance"
          options={{
            title: 'Romance',
          }}
          component={TopicRomance}
        /> 
          <HomeStack.Screen
          name="TopicFriendship"
          options={{
            title: 'Friendship',
          }}
          component={TopicFriendship}
        /> 
         <HomeStack.Screen
          name="ShowMore"
          options={{
            title: 'Show More',
          }}
          component={ShowMore}
        /> 
         <HomeStack.Screen
          name="TopicHousing"
          options={{
            title: 'Housing',
          }}
          component={TopicHousing}
        /> 
         <HomeStack.Screen
          name="inSport"
          options={{
            title: 'Reading',
          }}
          component={inSport}
        /> 
        <HomeStack.Screen
          name="Favorites"
          options={{
            title: 'Favorites',
          }}
          component={BookmarkScreen}
        /> 
    </HomeStack.Navigator>
  );
};

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Audio" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />  
         <DetailsStack.Screen
          name="PlaylistScreen"
          options={{
            title: 'PlayList',
          }}
          component={PlaylistScreen}
        />   
</DetailsStack.Navigator>
);


const SearchStackScreen = ({navigation}) => (
  <SearchStack.Navigator screenOptions={{
          headerStyle: {
          backgroundColor: '#d02860',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
          fontWeight: 'bold'
          }
      }}>
          <DetailsStack.Screen name="Search" component={SearchScreen} options={{
          headerLeft: () => (
              <Icon.Button name="ios-menu" size={25} backgroundColor="#d02860" onPress={() => navigation.openDrawer()}></Icon.Button>
          )
          }} />
  </SearchStack.Navigator>
  );

  const ProfileStackScreen = ({navigation}) => {
    const {colors} = useTheme();
  
    return (
      <ProfileStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            shadowColor: colors.background, // iOS
            elevation: 0, // Android
          },
          headerTintColor: colors.text,
        }}>
        <ProfileStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: '',
            headerLeft: () => (
              <View style={{marginLeft: 10}}>
                <Icon.Button
                  name="ios-menu"
                  size={25}
                  backgroundColor={colors.background}
                  color={colors.text}
                  onPress={() => navigation.openDrawer()}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{marginRight: 10}}>
                <MaterialCommunityIcons.Button
                  name="account-edit"
                  size={25}
                  backgroundColor={colors.background}
                  color={colors.text}
                  onPress={() => navigation.navigate('EditProfile')}
                />
              </View>
            ),
          }}
        />
        <ProfileStack.Screen
          name="EditProfile"
          options={{
            title: 'Edit Profile',
          }}
          component={EditProfileScreen}
        />
      </ProfileStack.Navigator>

    );
  };