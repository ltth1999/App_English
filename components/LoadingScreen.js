import React from 'react';
import { Image, View, StyleSheet, ActivityIndicator} from 'react-native'

function LoadingScreen (props){
    return (
        <View style={styles.container}>
            <Image source={require('./img/asset.png')} ></Image>
            <ActivityIndicator size="large" color="#262322" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFF0F0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleSplash: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#EFF0F0'
    }
})

export default LoadingScreen
