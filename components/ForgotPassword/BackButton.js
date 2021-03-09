import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'


const BackButton = ({ goBack }) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={require('../img/arrow_back.png')} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 4,
  },
  image: {
    width: 24,
    height: 24,
  },
})

export default BackButton