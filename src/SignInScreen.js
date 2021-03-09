
 import React from 'react';
 import { 
     View, 
     Text, 
     TouchableOpacity, 
     TextInput,
     Platform,
     StyleSheet ,
     Alert,
     Image
 } from 'react-native';
 import * as Animatable from 'react-native-animatable';
 import LinearGradient from 'react-native-linear-gradient';
 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather';
 import SocialButton from "../components/buttons/SocialButton";
 


 import { useTheme } from 'react-native-paper';
 
 import { AuthContext } from '../components/context';

 
 import Users from '../model/users';

 
 const SignInScreen = ({navigation}) => {
   
    
     const [data, setData] = React.useState({
        //  username: '',
         email: '',
         password: '',
         check_textInputChange: false,
         secureTextEntry: true,
         isValidUser: true,
         isValidPassword: true,
     });
 
     const { colors } = useTheme();
 
     const { signIn } = React.useContext(AuthContext);
 
     const textInputChange = (val) => {
         if( val.trim().length >= 4 ) {
             setData({
                 ...data,
                 email: val,
                 check_textInputChange: true,
                 isValidUser: true
             });
         } else {
             setData({
                 ...data,
                 email: val,
                 check_textInputChange: false,
                 isValidUser: false
             });
         }
     }
 
     const handlePasswordChange = (val) => {
         if( val.trim().length >= 8 ) {
             setData({
                 ...data,
                 password: val,
                 isValidPassword: true
             });
         } else {
             setData({
                 ...data,
                 password: val,
                 isValidPassword: false
             });
         }
     }
 
     const updateSecureTextEntry = () => {
         setData({
             ...data,
             secureTextEntry: !data.secureTextEntry
         });
     }
 
     const handleValidUser = (val) => {
         if( val.trim().length >= 4 ) {
             setData({
                 ...data,
                 isValidUser: true
             });
         } else {
             setData({
                 ...data,
                 isValidUser: false
             });
         }
     }
 
     const loginHandle = (Email, password) => {
 
         const foundUser = Users.filter( item => {
             return Email == item.email && password == item.password;
         } );
 
         if ( data.email.length == 0 || data.password.length == 0 ) {
             Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                 {text: 'Okay'}
             ]);
             return;
         }
 
         if ( foundUser.length == 0 ) {
             Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                 {text: 'Okay'}
             ]);
             return;
         }
         signIn(foundUser);
     }
 
    return(
      
      <View style={styles.container}> 
      
        <Image
        source={require('./asset/asset.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>EasyEng App</Text>
          <Animatable.View >
          <Text style={[styles.text_footer, {
                color: colors.text
            }]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome 
                    name="user-o"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Usename"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: colors.text
                    }]}

                   

                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
            
                    onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null}
            </View>
            { data.isValidUser ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Username must be 4 characters long.</Text>
            </Animatable.View>
            }
            
            <Text style={[styles.text_footer, {
                color: colors.text,
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                <Feather 
                    name="lock"
                    color={colors.text}
                    size={20}
                />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput, {
                        color: colors.text
                    }]}
                    
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                    
                />
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ? 
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
            </View>
            { data.isValidPassword ? null : 
            <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
            </Animatable.View>
            }
                  <TouchableOpacity
             onPress={() => navigation.navigate('ForgotPassword')}>
                <Text style={{fontSize: 15,
                color: '#2e64e5',
                fontFamily: 'Lato-Regular', 
                marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.email, data.password )}}
                  
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

      

                {/* <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity> */}
            </View>
            {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null}
       <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignUpScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
           
            </Animatable.View>
      </View>
    
    );
  };

export default SignInScreen;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        paddingHorizontal: 30,
        paddingVertical:100
    },
    title: {
        color:'#3465d9',
        fontWeight:'bold',
        fontSize:30,
        marginBottom: 15,
        textAlign: 'center'
    },
    text: {
        color: 'gray',
        textAlign: 'center', 
          
    },
    logo: {
        height: 100,
        width: 100,
        resizeMode: 'cover',
        marginLeft: 100,
        marginTop: 5
      },
      text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 25,
        marginBottom: 10,
        color: '#051d5f',
        marginLeft: 80
      },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
        marginTop: 15

    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 3
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 10
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 40
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 15,
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
        marginLeft: 40
    },
});



// import React, { useState, useEffect } from 'react';

// import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
// import { Input, Button, Icon } from 'react-native-elements';
// import Loader from '../components/load';
// import firebase from './config';

// import { AccessToken, LoginManager, LoginButton } from 'react-native-fbsdk';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin, statusCodes } from 'react-native-google-signin';

// import LinearGradient from 'react-native-linear-gradient';
// import SocialButton from "../components/buttons/SocialButton";
// import SignUpScreen from './SignUpScreen';

// function SignInScreen(props){

//     const { navigation } = props;
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');
//     const [error, setError] = React.useState('');
//     const [loading, setLoading] = React.useState(false);
//     const [isPasswordShow, setIsPasswordShow] = React.useState(true);

//     // const onLogin = ()=>{
//     //     this.navigation.navigate
//     // }
//     const showPassword1 = () =>{
//         setIsPasswordShow(!isPasswordShow)
//     }
    
//     async function onLogin(navigation) {
//         setLoading(true);
//         await firebase.auth().signInWithEmailAndPassword(email, password).then( async() => {
//           let userId = firebase.auth().currentUser.uid;
//           console.log("User: "+userId+" has been logged");
           
        
//           setError('');
//           setLoading(false);
//         })
//         .catch(error => {
//             console.log(error.toString());
//             setLoading(false);
//             setError('Incorrect username or password.');
//         });
//         SignUpScreen();
//     }

//     //Facebook

//     async function loginWithFB() {
//         // Attempt login with permissions
//         const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    
//         if (result.isCancelled) {
//         throw 'User cancelled the login process';
//         }
    
//         // Once signed in, get the users AccesToken
//         const data = await AccessToken.getCurrentAccessToken();
    
//         if (!data) {
//         throw 'Something went wrong obtaining access token';
//         }
    
//         // Create a Firebase credential with the AccessToken
//         const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    
//         // Sign-in the user with the credential
//         return auth().signInWithCredential(facebookCredential);
//     }

//     //Google
//     GoogleSignin.configure({
//         webClientId: '877293467942-ag967jfj4m8l7a7f04mmgee0hrp6of2h.apps.googleusercontent.com',
//     });
    
//     async function googleLogin() {
//         // Get the users ID token
//         const { idToken } = await GoogleSignin.signIn();
      
//         // Create a Google credential with the token
//         const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
//         // Sign-in the user with the credential
//         return auth().signInWithCredential(googleCredential);
//       }

    
//     return(
//         <ScrollView style={styles.scrollContainer}>
//             <View style={{marginTop: 30, alignItems: 'center'}}>
//                 <Image source={require('./asset/asset.png')}style={styles.logo}/>
//                 <Text style={styles.text}>Easy Eng</Text>
//             </View>
//             <View style={styles.container}>
//                 <Loader loading={loading} />
//                 <Input
//                     value={email}
//                     placeholderTextColor='#AAAAAA'
//                     onChangeText={setEmail}
//                     errorMessage={error}
//                     keyboardType='email-address'
//                     placeholder='Your email'
//                     inputStyle={styles.inputStyle}
//                     leftIcon={{ type: 'material', name: 'email', color: '#506982' }}
//                 />
//                 <Input
//                     placeholder='Your password'
//                     placeholderTextColor='#AAAAAA'
//                     value={password}
//                     secureTextEntry={isPasswordShow}
//                     onChangeText={setPassword}
//                     errorMessage={error}
//                     inputStyle={styles.inputStyle}
//                     leftIcon={{ type: 'material', name: 'lock', color: '#506982' }}
//                     rightIcon={
//                     <Icon
//                         type='material'
//                         name={isPasswordShow ? 'visibility':'visibility-off'}
//                         color='#506982'
//                         onPress={showPassword1}
//                     />}
//                 />
//                 <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
//                 <Text style={{color: '#7093B5', alignSelf: 'flex-end', marginHorizontal: 20, marginBottom: 15, marginTop: -3}} >
//                     Forgot your password?
//                 </Text>
//                 </TouchableOpacity>
                
//                 <View style={styles.button}>
//                     <TouchableOpacity
//                         style={styles.signIn}
//                         onPress={onLogin} 
                    
//                     >
//                     <LinearGradient
//                         colors={['#08d4c4', '#01ab9d']}
//                         style={styles.signIn}
//                     >
//                         <Text style={[styles.textSign, {
//                             color:'#fff'
//                         }]}>Sign In</Text>
//                     </LinearGradient>
//                     </TouchableOpacity>
//                 </View>
//                 {Platform.OS === 'android' ? (
//                 <View>
//                 <SocialButton
//                     buttonTitle="Sign In with Facebook"
//                     btnType="facebook"
//                     color="#4867aa"
//                     backgroundColor="#e6eaf4"
//                     onPress={loginWithFB}
//                 />

//                 <SocialButton
//                     buttonTitle="Sign In with Google"
//                     btnType="google"
//                     color="#de4d41"
//                     backgroundColor="#f5e7ea"
//                     onPress={googleLogin}
//                 />
//                 </View>
//             ) : null}
//              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
//                     <Text style={{color: '#7093B5'}} >
//                         Don't have an account?
//                     </Text>
//                     <Button titleStyle={{color: '#efb810'}} type='clear' title='Sign Up' onPress={()=>navigation.navigate('SignUpScreen')} />
//                 </View>
//             </View>
//         </ScrollView>
//     );
// }

// const styles = StyleSheet.create({
//     scrollContainer: {
//         backgroundColor: 'white'
//     },
//     container:{
//         flex: 1,
//         backgroundColor: '#EFF0F0',
//         marginHorizontal: 20,
//         marginTop: 10,
//         borderRadius: 20,
//         padding: 15,
//         shadowColor: '#313336',
//         shadowOffset: {
//             width: 0,
//             height: 6,
//         },
        
//         shadowOpacity: 0.37,
//         shadowRadius: 7.49,
//         elevation: 10,
//         marginVertical: 10,
//         flexBasis: '42%',
//     },
//     logo: {
//         height: 100,
//         width: 100,
//         resizeMode: 'cover',
       
//     },
//     text: {
//         fontFamily: 'Kufam-SemiBoldItalic',
//         fontSize: 25,
//         marginBottom: 10,
//         color: '#051d5f'    
//     },
//     title: {
//         color: '#efb810',
//         fontSize: 42,
//         fontWeight: 'bold'
//     },
//     button: {
//         alignItems: 'center',
//         marginTop: 40
//     },
//     signIn: {
//         width: '100%',
//         height: 50,
//         justifyContent: 'center',
//         alignItems: 'center',
//         borderRadius: 10
//     },
//     textSign: {
//         fontSize: 18,
//         fontWeight: 'bold'
//     },
//     inputStyle: {
//         color: '#262322'
//     }, 
//     btnLogin: {
//         marginHorizontal: 30,
//         marginBottom: 10,
//         backgroundColor: 'black'
//     }
// });

// export default SignInScreen


