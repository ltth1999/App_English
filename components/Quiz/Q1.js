import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
export default class Q1 extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={styles.title}>
            <Text style={styles.text}>Câu 1/18</Text>
          </View>
          <View style={styles.title1}>
            <Text style={styles.text}>5%</Text>
          </View>
          <View style={styles.title2}>
            <Text style={styles.text}>LIST</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Icon name="cross" size={20}></Icon>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#8181F7',
            marginTop: 20,
            height: 30,
            justifyContent: 'center',
          }}>
          <Text style={{marginLeft: 5}}>
            My parent normally .... brekfast at 7:00 a.m.{' '}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: 80,
    backgroundColor: '#6E6E6E',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title1: {
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: 50,
    backgroundColor: '#6E6E6E',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title2: {
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: 80,
    backgroundColor: 'green',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  text: {
    color: 'white',
  },
});
