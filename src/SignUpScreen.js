// import React from 'react';
// import { 
//     View, 
//     Text, 
//     Button, 
//     TouchableOpacity, 
//     Dimensions,
//     TextInput,
//     Platform,
//     StyleSheet,
//     StatusBar
// } from 'react-native';
// import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Feather from 'react-native-vector-icons/Feather';

// import SocialButton from "../components/buttons/SocialButton";

// const SignUpScreen = ({navigation}) => {
  
//     const [data, setData] = React.useState({
//         username: '',
//         password: '',
//         confirm_password: '',
//         check_textInputChange: false,
//         secureTextEntry: true,
//         confirm_secureTextEntry: true,
//     });

//     const textInputChange = (val) => {
//         if( val.length !== 0 ) {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 username: val,
//                 check_textInputChange: false
//             });
//         }
//     }

//     const handlePasswordChange = (val) => {
//         setData({
//             ...data,
//             password: val
//         });
//     }

//     const handleConfirmPasswordChange = (val) => {
//         setData({
//             ...data,
//             confirm_password: val
//         });
//     }

//     const updateSecureTextEntry = () => {
//         setData({
//             ...data,
//             secureTextEntry: !data.secureTextEntry
//         });
//     }

//     const updateConfirmSecureTextEntry = () => {
//         setData({
//             ...data,
//             confirm_secureTextEntry: !data.confirm_secureTextEntry
//         });
//     }

//     return (
//         <View style={styles.container}> 
//         <Text style = {styles.text}>Register Now!</Text>  
//         <Animatable.View >
//             <Text style={styles.text_footer}>Username</Text>
//             <View style={styles.action}>
//                 <FontAwesome 
//                     name="user-o"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Username"
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => textInputChange(val)}
//                 />
//                 {data.check_textInputChange ? 
//                 <Animatable.View
//                     animation="bounceIn"
//                 >
//                     <Feather 
//                         name="check-circle"
//                         color="green"
//                         size={20}
//                     />
//                 </Animatable.View>
//                 : null}
//             </View>

//             <Text style={[styles.text_footer, {
//                 marginTop: 35
//             }]}>Password</Text>
//             <View style={styles.action}>
//                 <Feather 
//                     name="lock"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Your Password"
//                     secureTextEntry={data.secureTextEntry ? true : false}
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => handlePasswordChange(val)}
//                 />
//                 <TouchableOpacity
//                     onPress={updateSecureTextEntry}
//                 >
//                     {data.secureTextEntry ? 
//                     <Feather 
//                         name="eye-off"
//                         color="grey"
//                         size={20}
//                     />
//                     :
//                     <Feather 
//                         name="eye"
//                         color="grey"
//                         size={20}
//                     />
//                     }
//                 </TouchableOpacity>
//             </View>

//             <Text style={[styles.text_footer, {
//                 marginTop: 35
//             }]}>Confirm Password</Text>
//             <View style={styles.action}>
//                 <Feather 
//                     name="lock"
//                     color="#05375a"
//                     size={20}
//                 />
//                 <TextInput 
//                     placeholder="Confirm Your Password"
//                     secureTextEntry={data.confirm_secureTextEntry ? true : false}
//                     style={styles.textInput}
//                     autoCapitalize="none"
//                     onChangeText={(val) => handleConfirmPasswordChange(val)}
//                 />
//                 <TouchableOpacity
//                     onPress={updateConfirmSecureTextEntry}
//                 >
//                     {data.secureTextEntry ? 
//                     <Feather 
//                         name="eye-off"
//                         color="grey"
//                         size={20}
//                     />
//                     :
//                     <Feather 
//                         name="eye"
//                         color="grey"
//                         size={20}
//                     />
//                     }
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.textPrivate}>
//                 <Text style={styles.color_textPrivate}>
//                     By signing up you agree to our
//                 </Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold',color:'#de4d41'}]}>{" "}Terms of service</Text>
//                 <Text style={styles.color_textPrivate}>{" "}and</Text>
//                 <Text style={[styles.color_textPrivate, {fontWeight: 'bold', color:'#de4d41'}]}>{" "}Privacy policy</Text>
//             </View>
//             <View style={styles.button}>
//                 <TouchableOpacity
//                     style={styles.signIn}
//                     onPress={() => {}}
//                 >
//                 <LinearGradient
//                     colors={['#08d4c4', '#01ab9d']}
//                     style={styles.signIn}
//                 >
//                     <Text style={[styles.textSign, {
//                         color:'#fff'
//                     }]}>Sign Up</Text>
//                 </LinearGradient>
//                 </TouchableOpacity>
//                 {Platform.OS === 'android' ? (
//                 <View>
//                 <SocialButton
//                     buttonTitle="Sign Up with Facebook"
//                     btnType="facebook"
//                     color="#4867aa"
//                     backgroundColor="#e6eaf4"
//                     onPress={() => {}}
//                 />
            
//                 <SocialButton
//                     buttonTitle="Sign Up with Google"
//                     btnType="google"
//                     color="#de4d41"
//                     backgroundColor="#f5e7ea"
//                     onPress={() => {}}
//                 />
//                 </View>
//             ) : null}
//                 {/* <TouchableOpacity
//                     onPress={() => navigation.goBack()}
//                     style={[styles.signIn, {
//                         borderColor: '#009387',
//                         borderWidth: 1,
//                         marginTop: 15
//                     }]}
//                 >
//                     <Text style={[styles.textSign, {
//                         color: '#009387'
//                     }]}>Sign In</Text>
//                 </TouchableOpacity> */}
//                 <TouchableOpacity
//                     style={styles.navButton}
//                     onPress={() => navigation.navigate('SignInScreen')}>
//                     <Text style={styles.navButtonText}>Have an account? Sign In</Text>
//                 </TouchableOpacity>
//             </View>
            
//         </Animatable.View>
//       </View>
     
//     );
// };

// export default SignUpScreen;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         paddingHorizontal: 30,
//         paddingVertical:100
//     },
  
//     text: {
//         fontFamily: 'Kufam-SemiBoldItalic',
//         fontSize: 25,
//         marginBottom: 10,
//         color: '#051d5f',
//         marginLeft: 75
//       },
//     text_footer: {
//         color: '#05375a',
//         fontSize: 18
//     },
//     action: {
//         flexDirection: 'row',
//         marginTop: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#f2f2f2',
//         paddingBottom: 3
//     },
//     textInput: {
//         flex: 1,
//         marginTop: Platform.OS === 'ios' ? 0 : -12,
//         paddingLeft: 10,
//         color: '#05375a',
//     },
//     button: {
//         alignItems: 'center',
//         paddingTop: 10
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
//         fontWeight: 'bold',
//         paddingBottom: 5
//     },
//     textPrivate: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 15,
//         justifyContent:'center'
//     },
//     color_textPrivate: {
//         color: 'grey',
//     },
//     navButton: {
//         marginTop: 15,
//       },
//       navButtonText: {
//         fontSize: 15,
//         color: '#2e64e5',
//         fontFamily: 'Lato-Regular',
//       },
//   });


import React from 'react';
import { StyleSheet, Text, View, ScrollView,TouchableOpacity } from 'react-native';
import { Input, Button, Icon } from 'react-native-elements';
import Loader from '../components/load';
import Firebase from './config';

import LinearGradient from 'react-native-linear-gradient';
import SocialButton from "../components/buttons/SocialButton";

function SignUpScreen(props){
    const {navigation} = props;
    const [email, setEmail] = React.useState('');
    const [emailErr, setEmailErr] = React.useState('');
    const [nombre, setNombre] = React.useState('');
    const [apellido, setApellido] = React.useState('');
    const [contraseña, setContraseña] = React.useState('');
    const [contraseñaErr, setContraseñaErr] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [secureText, setSecureText] = React.useState(true);

    const mostrarTexto = () =>{
        setSecureText(!secureText)
    }

    async function onRegister(){
        setLoading(true);
        setEmailErr('');
        setContraseñaErr('');
        await Firebase.auth().createUserWithEmailAndPassword(email, contraseña).then(() => {
            console.log("User: "+email+" has been registered");
            //Añadir usuario
            let user = Firebase.auth().currentUser;
            console.log("User: "+user.uid+" has been logged");
            setLoading(false);
            user.updateProfile({
                displayName: `${nombre} ${apellido}`,
                photoURL: "https://firebasestorage.googleapis.com/v0/b/manisecurity-2639a.appspot.com/o/avatar%2Fdefault.png?alt=media&token=adef2795-797d-40cf-8f1d-af14d4a6e749"
            });
        })
        .catch(error => {
            setLoading(false);
            if (error.code === 'auth/email-already-in-use') {
                console.log('The email is already in use.');
                setEmailErr('The email is already in use.');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('The email address is not valid.');
                setEmailErr('The email address is not valid.');
            }
            if (error.code === 'auth/weak-password') {
                console.log('The password should be at least 6 characters long.');
                setContraseñaErr('The password should be at least 6 characters long.');
            } else {
                console.log(error);
                setEmailErr('An unexpected error occurred, please try again later.');
            }
        });
      } 

    return(
        <ScrollView style={styles.scrollContainer}>
            <View style={{marginTop: 25, alignItems: 'center'}}>
                <Text style={styles.title}>Register Now!</Text>
                <Text style={{color: 'black', fontSize: 18}}>What are your personal data?</Text>
            </View>
            <View style={styles.container}>
                <Loader loading={loading} />
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                    <Input
                        value={nombre}
                        placeholderTextColor='#A7AEB5'
                        onChangeText={setNombre}
                        placeholder='Your name'
                        style={{flex: 1}}
                        inputStyle={styles.inputStyle}
                        leftIcon={{ type: 'material', name: 'person', color: '#506982' }}
                    />
                    </View>
                    <View style={{flex: 1}}>
                    <Input
                        value={apellido}
                        placeholderTextColor='#A7AEB5'
                        onChangeText={setApellido}
                        placeholder='Your surname'
                        style={{flex: 1}}
                        inputStyle={styles.inputStyle}
                        leftIcon={{ type: 'material', name: 'person', color: '#506982' }}
                    />
                    </View>
                </View>
                <Input
                    value={email}
                    placeholderTextColor='#A7AEB5'
                    onChangeText={setEmail}
                    placeholder='Your email'
                    keyboardType='email-address'
                    errorMessage={emailErr}
                    inputStyle={styles.inputStyle}
                    leftIcon={{ type: 'material', name: 'email', color: '#506982' }}
                />
                <Input
                    placeholder='Your password'
                    placeholderTextColor='#A7AEB5'
                    value={contraseña}
                    secureTextEntry={secureText}
                    onChangeText={setContraseña}
                    errorMessage={contraseñaErr}
                    inputStyle={styles.inputStyle}
                    leftIcon={{ type: 'material', name: 'lock', color: '#506982' }}
                    rightIcon={
                    <Icon
                        type='material'
                        name={secureText ? 'visibility':'visibility-off'}
                        color='#506982'
                        onPress={mostrarTexto}
                    />}
                />
                 <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By signing up you agree to our
                    </Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold',color:'#de4d41'}]}>{" "}Terms of service</Text>
                    <Text style={styles.color_textPrivate}>{" "}and</Text>
                    <Text style={[styles.color_textPrivate, {fontWeight: 'bold', color:'#de4d41'}]}>{" "}Privacy policy</Text>
                </View>
                {/* <Button onPress={onRegister} buttonStyle={styles.btnLogin} titleStyle={{color: '#efb810'}} title='REGISTER' /> */}
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={()=>onRegister(email)} 
                    
                    >
                    <LinearGradient
                        colors={['#08d4c4', '#01ab9d']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {
                            color:'#fff'
                        }]}>Sign Up</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                </View>
                {Platform.OS === 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="Sign Up with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                       
                    />

                    <SocialButton
                        buttonTitle="Sign Up with Google"
                        btnType="google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                      
                    />
                </View>
                ) : null}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: '#7093B5'}} >
                       Already a member?
                    </Text>
                    <Button titleStyle={{color: '#efb810'}} type='clear' title='Sign In' onPress={()=>navigation.navigate('SignInScreen')} />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: 'white'
    },
    container:{
        flex: 1,
        backgroundColor: '#EFF0F0',
        marginHorizontal: 16,
        marginTop: 25,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        shadowColor: '#313336',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 10,
        marginVertical: 10,
        flexBasis: '42%',
    },
    title: {
        color: '#efb810',
        fontSize: 28,
        fontWeight: 'bold'
    },
    inputStyle: {
        color: '#262322',
        fontSize: 16
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 15,
        justifyContent:'center'
    },
    color_textPrivate: {
        color: 'grey',
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
    btnLogin: {
        marginHorizontal: 30,
        marginTop: 10,
        backgroundColor: '#262322'
    }
});

export default SignUpScreen
