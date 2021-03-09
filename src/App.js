// import React, { useState, useEffect, Component } from 'react';
// import { View, ActivityIndicator } from 'react-native';
// import { 
//   NavigationContainer, 
//   DefaultTheme as NavigationDefaultTheme,
//   DarkTheme as NavigationDarkTheme
// } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import { 
//   Provider as PaperProvider, 
//   DefaultTheme as PaperDefaultTheme,
//   DarkTheme as PaperDarkTheme 
// } from 'react-native-paper';


// //firebase
// import Firebase from './config';
// import auth from '@react-native-firebase/auth';

// //Screens
// import LoadingScreen from '../components/LoadingScreen';


// import { DrawerContent } from './DrawerContent';

// import MainTapScreen from './MainTapScreen';
// import SupportScreen from './SupportScreen';
// import SettingsScreen from './SettingsScreen';
// import BookmarkScreen from './BookmarkScreen';
// import Support1 from '../components/Support/Support1';
// import { AuthContext } from '../components/context';
// import ExamScreen from './ExamScreen';
// import playquiz from '../components/Quiz/Playquiz';
// import playquiz1 from '../components/Quiz/Playquiz1';
// import playquiz2 from '../components/Quiz/Playquiz2';
// import playquiz3 from '../components/Quiz/Playquiz3';
// import playquiz4 from '../components/Quiz/Playquiz4';
// import playquiz5 from '../components/Quiz/Playquiz5';



// import RootStackScreen from './RootStackScreen';

// import AsyncStorage from '@react-native-community/async-storage';



// const Drawer = createDrawerNavigator();

// const App = () => {
//   // const [isLoading, setIsLoading] = React.useState(true);
//   // const [userToken, setUserToken] = React.useState(null); 

//   const [isDarkTheme, setIsDarkTheme] = React.useState(false);

//   // const initialLoginState = {
//   //   isLoading: true,
//   //   userName: null,
//   //   userToken: null,
//   // };

//   const CustomDefaultTheme = {
//     ...NavigationDefaultTheme,
//     ...PaperDefaultTheme,
//     colors: {
//       ...NavigationDefaultTheme.colors,
//       ...PaperDefaultTheme.colors,
//       background: '#ffffff',
//       text: '#333333'
//     }
//   }

//   const CustomDarkTheme = {
//     ...NavigationDarkTheme,
//     ...PaperDarkTheme,
//     colors: {
//       ...NavigationDarkTheme.colors,
//       ...PaperDarkTheme.colors,
//       background: '#333333',
//       text: '#ffffff'
//     }
//   }

//   const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

//   // const loginReducer = (prevState, action) => {
//   //   switch( action.type ) {
//   //     case 'RETRIEVE_TOKEN': 
//   //       return {
//   //         ...prevState,
//   //         userToken: action.token,
//   //         isLoading: false,
//   //       };
//   //     case 'LOGIN': 
//   //       return {
//   //         ...prevState,
//   //         userName: action.id,
//   //         userToken: action.token,
//   //         isLoading: false,
//   //       };
//   //     case 'LOGOUT': 
//   //       return {
//   //         ...prevState,
//   //         userName: null,
//   //         userToken: null,
//   //         isLoading: false,
//   //       };
//   //     case 'REGISTER': 
//   //       return {
//   //         ...prevState,
//   //         userName: action.id,
//   //         userToken: action.token,
//   //         isLoading: false,
//   //       };
//   //   }
//   // };
//  /// dang fix///
// //   const App = ({ children }) => {
// //     <AuthContext.Provider
// //     value={{
// //         user,
// //         setUser,
// //         login: async (email, password) => {
// //             try {
// //                 await auth().signInWithEmailAndPassword(email, password);

// //             } catch (e) {
// //                 console.log(e);
// //             }
// //         },
// //         googleLogin: async()=>{
// //             try{
// //                 // Get the users ID token
// //                 const { idToken } = await GoogleSignin.signIn();

// //                 // Create a Google credential with the token
// //                 const googleCredential = auth.GoogleAuthProvider.credential(idToken);

// //                 // Sign-in the user with the credential
// //                 await auth().signInWithCredential(googleCredential);
// //               }catch(e){
// //                   console.log(e);
// //               }
// //         },
// //         register: async (email, password) => {
// //             try {
// //                 await auth().createUserWithEmailAndPassword(email, password);

// //             } catch (e) {
// //                 console.log(e);
// //             }

// //         },
// //         logout: async () => {
// //             try {
// //                 await auth().signOut();

// //             } catch (e) {
// //                 console.log(e);
// //             }
// //         },
// //     }}


// // >

// //     {children}
// // </AuthContext.Provider>

// // };
//   // const [initializing, setInitializing] = useState(true);
//   // const [user, setUser] = useState(null);

//   // function onAuthStateChanged(user) {
//   //     setUser(user);
//   //     if (initializing) setInitializing(false);
//   // }

//   // useEffect(() => {
//   //     const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
//   //     return subscriber; // unsubscribe on unmount
//   // }, []);
//   // if (initializing) return <LoadingScreen/>;
//   const [initializing, setInitializing] = useState(true);
//   const [user, setUser] = useState();

//   // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }

//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

//   if (initializing) return null;


//   //const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

//   // const authContext = React.useMemo(() => ({
//   //   signIn: async(foundUser) => {
//   //     // setUserToken('fgkj');
//   //     // setIsLoading(false);
//   //     const userToken = String(foundUser[0].userToken);
//   //     const userName = foundUser[0].username;

//   //     try {
//   //       await AsyncStorage.setItem('userToken', userToken);
//   //     } catch(e) {
//   //       console.log(e);
//   //     }
//   //     // console.log('user token: ', userToken);
//   //     dispatch({ type: 'LOGIN', id: userName, token: userToken });
//   //   },
//   //   signOut: async() => {
//   //     // setUserToken(null);
//   //     // setIsLoading(false);
//   //     try {
//   //       await AsyncStorage.removeItem('userToken');
//   //     } catch(e) {
//   //       console.log(e);
//   //     }
//   //     dispatch({ type: 'LOGOUT' });
//   //   },
//   //   signUp: () => {
//   //     // setUserToken('fgkj');
//   //     // setIsLoading(false);
//   //   },
//   //   toggleTheme: () => {
//   //     setIsDarkTheme( isDarkTheme => !isDarkTheme );
//   //   }
//   // }), []);

//   // useEffect(() => {
//   //   setTimeout(async() => {
//   //     // setIsLoading(false);
//   //     let userToken;
//   //     userToken = null;
//   //     try {
//   //       userToken = await AsyncStorage.getItem('userToken');
//   //     } catch(e) {
//   //       console.log(e);
//   //     }
//   //     // console.log('user token: ', userToken);
//   //     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
//   //   }, 1000);
//   // }, []);
//   // console.disableYellowBox = true;
//   // if( loginState.isLoading ) {
//   //   return(
//   //     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
//   //       <ActivityIndicator size="large"/>
//   //     </View>
//   //   );

//   return (
//     <PaperProvider theme={theme}>
//     {/* <AuthContext.Provider value={authContext}> */}
//     <NavigationContainer theme={theme}>
//       {user == null ?  (
//         <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
//           <Drawer.Screen name="HomeDrawer" component={MainTapScreen} />
//           <Drawer.Screen name="SupportScreen" component={SupportScreen} />
//           <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
//           <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
//           <Drawer.Screen name="ExamScreen" component={ExamScreen} />
//           <Drawer.Screen name="Support1" component={Support1} />
//           <Drawer.Screen name="playquiz" component={playquiz} />
//           <Drawer.Screen name="playquiz1" component={playquiz1} />
//           <Drawer.Screen name="playquiz2" component={playquiz2} />
//           <Drawer.Screen name="playquiz3" component={playquiz3} />
//           <Drawer.Screen name="playquiz4" component={playquiz4} />
//           <Drawer.Screen name="playquiz5" component={playquiz5} /> 
//         </Drawer.Navigator>
//       )
//     :
//       <RootStackScreen/>
//     }
//     </NavigationContainer>
//     {/* </AuthContext.Provider> */}
//     </PaperProvider>
//   );

// }

// export default App;



import React, { useState, useEffect, Component } from 'react';
import { View, ActivityIndicator } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';
import {Provider} from 'react-redux'

//firebase
import Firebase from './config';
import auth from '@react-native-firebase/auth';

//Screens
import LoadingScreen from '../components/LoadingScreen';


import { DrawerContent } from './DrawerContent';

import MainTapScreen from './MainTapScreen';
import SupportScreen from './SupportScreen';
import SettingsScreen from './SettingsScreen';
import BookmarkScreen from './BookmarkScreen';
import Support1 from '../components/Support/Support1';
import { AuthContext } from '../components/context';
import ExamScreen from './ExamScreen';
import playquiz from '../components/Quiz/Playquiz';
import playquiz1 from '../components/Quiz/Playquiz1';
import playquiz2 from '../components/Quiz/Playquiz2';
import playquiz3 from '../components/Quiz/Playquiz3';
import playquiz4 from '../components/Quiz/Playquiz4';
import playquiz5 from '../components/Quiz/Playquiz5';

import WordScreen from '../components/wordScreen/WordScreen';
import WordScreen1 from '../components/wordScreen/WordScreen1';
import WordScreen2 from '../components/wordScreen/WordScreen2';


import renderPagination from '../components/Swiper/Swiper1';
import Interface from './interface';


import SearchHome from '../components/Search/SearchList';
import SearchDetails from '../components/Search/SearchDetails';
import SearchDeTwo from '../components/Search/SearchDeTwo';

import TranslateList from '../components/Translate/TranslateList';

import QuizExamScreen from './QuizExamScreen';
import VocabularyList from '../components/Vocabulary/VocabularyList';

import QuizList from '../components/QuizExam/QuizList';

import RootStackScreen from './RootStackScreen';

import AsyncStorage from '@react-native-community/async-storage';
import Store from './store'
// import QuizList from '../components/QuizIQ/QuizList';




const Drawer = createDrawerNavigator();

const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null); 

  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: '#ffffff',
      text: '#333333'
    }
  }

  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: '#333333',
      text: '#ffffff'
    }
  }

  const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          email: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          email: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async (foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser[0].userToken);
      const email = foundUser[0].email;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: email, token: userToken });
    },
    signOut: async () => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme(isDarkTheme => !isDarkTheme);
    }
  }), []);

  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Provider store={Store}>
      <PaperProvider theme={theme}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer theme={theme}>
          {loginState.userToken !== null ? (
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
              <Drawer.Screen name="HomeDrawer" component={MainTapScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
              <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
              <Drawer.Screen name="ExamScreen" component={ExamScreen} />
              <Drawer.Screen name="Support1" component={Support1} />
              <Drawer.Screen name="playquiz" component={playquiz} />
              <Drawer.Screen name="playquiz1" component={playquiz1} />
              <Drawer.Screen name="playquiz2" component={playquiz2} />
              <Drawer.Screen name="playquiz3" component={playquiz3} />
              <Drawer.Screen name="playquiz4" component={playquiz4} />
              <Drawer.Screen name="playquiz5" component={playquiz5} />
              <Drawer.Screen name="QuizList" component={QuizList} />
              <Drawer.Screen name="QuizExamScreen" component={QuizExamScreen} />
              <Drawer.Screen name="WordScreen" component={WordScreen} />
              <Drawer.Screen name="Interface" component={Interface} />
              <Drawer.Screen name="renderPagination" component={renderPagination} />
              <Drawer.Screen name="TranslateList" component={TranslateList} />
              <Drawer.Screen name="VocabularyList" component={VocabularyList} />
              <Drawer.Screen name="SearchHome" component={SearchHome} />
              <Drawer.Screen name="SearchDetails" component={SearchDetails} />
              <Drawer.Screen name="SearchDeTwo" component={SearchDeTwo} />
              <Drawer.Screen name="WordScreen1" component={WordScreen1} />
              <Drawer.Screen name="WordScreen2" component={WordScreen2} />
            </Drawer.Navigator>
          )
            :
            <RootStackScreen />
          }
        </NavigationContainer>
      </AuthContext.Provider>
    </PaperProvider>
    </Provider>
  );

}
console.disableYellowBox = true;
export default App;
