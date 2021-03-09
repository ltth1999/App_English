import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'

const Button = ({ mode, style, ...props }) => (
  <PaperButton
    style={[
      styles.button,
      mode === 'outlined' && { backgroundColor: "#000000" },
      style,
    ]}
    labelStyle={styles.text}
    mode={mode}
    {...props}
  />
)

const styles = StyleSheet.create({
  button: {
    width: '80%',
    marginVertical: 50,
    paddingVertical: 10,
    marginLeft: 40,

  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
})

export default Button