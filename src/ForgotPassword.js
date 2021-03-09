import React, {useState } from 'react';
import {
  View,
  Text,

  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBarButton from '../components/buttons/NavBarButton';
import styles from '../components/styles/ForgotPassword';

import TextInput from '../components/ForgotPassword/TextInput';

import Logo from '../components/ForgotPassword/Logo';
import Button from '../components/ForgotPassword/Button';


import { emailValidator } from '../components/helpers/emailValidator';
import { sendEmailWithPassword } from '../components/api/auth-api';


const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState({ value: '', error: '' })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState({ value: '', type: '' })

  const sendResetPasswordEmail = async () => {
    const emailError = emailValidator(email.value)
    if (emailError) {
      setEmail({ ...email, error: emailError })
      return
    }
    setLoading(true)
    const response = await sendEmailWithPassword(email.value)
    if (response.error) {
      setToast({ type: 'error', message: response.error })
    } else {
      setToast({
        type: 'success',
        message: 'Email with password has been sent.',
      })
    }
    setLoading(false)
  }

  return (
    <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
          <NavBarButton
            handleButtonPress={() => navigation.goBack()}
            location="left"
            icon={<Icon name="angle-left" color='#20b2aa' size={40} />}
          />
          <View style={{marginTop: 30, alignItems: 'center'}}>
              <Logo />
              <Text style = {{fontSize: 20 , fontSize: 25, color: '#051d5f' }}>Restore Password</Text>
          </View>

   
      <TextInput 
        placeholder='Your email'
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        description="You will receive email with password reset link."
      />
      <Button
        loading={loading}
        mode="contained"
        onPress={sendResetPasswordEmail}
        style={{ marginTop: 50 }}
      >
        Send Instructions
      </Button>
      </View>
  )
}

export default ForgotPassword

