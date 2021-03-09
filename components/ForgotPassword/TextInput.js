import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'


const TextInput = ({ errorText, description, ...props }) => (
  <View style={styles.container}>
    <Input
      style={styles.input}
      selectionColor='#121330'
      underlineColor="transparent"
      mode="outlined"
      {...props}
    />
    {description && !errorText ? (
      <Text style={styles.description}>{description}</Text>
    ) : null}
    {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: '#fffff0',
    marginTop: 60,
    width: '90%',
    borderRadius: 10,
    marginLeft: 20

  },
  description: {
    fontSize: 13,
    color: '#414757',
    paddingTop: 8,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft: 60
    
  },
  error: {
    fontSize: 13,
    color: '#f13a59',
    paddingTop: 8,
    marginLeft: 84
  },
})

export default  TextInput