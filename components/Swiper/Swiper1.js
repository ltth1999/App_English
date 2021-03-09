import React from 'react'
import { Text, View, Image, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginLeft: 2,
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10
  }
}

export default ({navigation}) => (
    
        <Swiper style={styles.wrapper} showsButtons loop={false}>
            
            <View testID="Hello" style={styles.slide1}>
                <Image source ={require('./img/3.jpg')} />
            <Text style={styles.text}>Volcano</Text>
            </View>
            <View testID="Beautiful" style={styles.slide2}>
            <Image source ={require('./img/7.png')} />
            <Text style={styles.text}>Girl</Text>
            </View>
            <View testID="Simple" style={styles.slide3}>
                
                    <Image source ={require('./img/8.png')} />
                    <Text style={styles.text}>Asset</Text>
 
               
                <Button style={{marginTop: 20}}  title="Test" onPress={()=>navigation.navigate("WordScreen")}>
                    </Button>
            </View>
            
        </Swiper>
  
)