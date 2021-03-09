import{createAppContainer} from "react-navigation";
import{createStackNavigator} from "react-navigation-stack";

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import ForgotPassword from './ForgotPassword';

import { GoogleSignin } from 'react-native-google-signin';
GoogleSignin.configure({
    webClientId: '877293467942-ag967jfj4m8l7a7f04mmgee0hrp6of2h.apps.googleusercontent.com',
    offlineAccess: true,
  });
 
const StackNavigator = createStackNavigator({
    SplashScreen:{
        screen: SplashScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SignInScreen:{
        screen: SignInScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    SignUpScreen:{
        screen:  SignUpScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    ForgotPassword:{
        screen:  ForgotPassword,
        navigationOptions: {
            headerShown: false
        }
    },
});

export default createAppContainer(StackNavigator);


// import React, {useState, useEffect} from 'react';
// import {View} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import SplashScreen from './SplashScreen';
// import SignInScreen from './SignInScreen';
// import SignUpScreen from './SignUpScreen';
// import ForgotPassword from './ForgotPassword';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import AsyncStorage from '@react-native-community/async-storage';
// import { GoogleSignin } from '@react-native-community/google-signin';

// const Stack = createStackNavigator();

// const RootStack = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);
//   let routeName;

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then((value) => {
//       if (value == null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
//     GoogleSignin.configure({
//       webClientId: 'YOUR_APP_WEB_CLIENT_ID',
//     });
  
//   }, []);

//   if (isFirstLaunch === null) {
//     return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
//   } else if (isFirstLaunch == true) {
//     routeName = 'Splash';
//   } else {
//     routeName = 'SignIn';
  
//   }

//   return (
//     <Stack.Navigator initialRouteName={routeName}>
//       <Stack.Screen
//         name="Splash"
//         component={SplashScreen}
//         options={{header: () => null}}
//       />
//       <Stack.Screen
//         name="SignIn"
//         component={SignInScreen}
//         options={{header: () => null}}
//       />
//       <Stack.Screen
//         name="SignUp"
//         component={SignUpScreen}
//         options={({navigation}) => ({
//           title: '',
//           headerStyle: {
//             backgroundColor: '#f9fafd',
//             shadowColor: '#f9fafd',
//             elevation: 0,
//           },
//           headerLeft: () => (
//             <View style={{marginLeft: 10}}>
//               <FontAwesome
//                 name="long-arrow-left"
//                 size={25}
//                 backgroundColor="#f9fafd"
//                 color="#333"
//                 onPress={() => navigation.navigate('SignInScreen')}
//               />
//             </View>
//           ),
//         })}
//       />
//       <Stack.Screen
//         name="ForgotPassword"
//         component={ForgotPassword}
//         options={{header: () => null}}
//       />
//     </Stack.Navigator>
//   );
// };

// export default RootStack;
