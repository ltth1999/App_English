import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import datainSport from '../data/datainSport';
import datainSport1 from '../data/datainSport1';
export default class inSport extends Component {
    constructor(props){
        super(props);
        this.state = {isEng: true}
    }
    Eng() {
        this.setState({isEng: true})
    }
    VN() {
        this.setState({isEng: false})
    }
    _onPressgoBack(){
        const {goBack} = this.props.navigation
        goBack()
    }
    _renderItem = ({item, index}) => {
      return (
          <View style={styles.item}>
            <Text style={{color: '#2E64FE', fontSize: 16}}>{ item.title}</Text>
          </View>
      );
    };
    _renderItem1 = ({item, index}) => {
      return (
          <View style={styles.item}>
            <Text style={{color: '#2E64FE', fontSize: 16}}>{ item.title}</Text>
          </View>
      );
    };
  render() {
      const EngJSX = (
        <View style={{ alignContent: 'stretch', justifyContent: 'center', marginTop: 20, padding: 5}}>
          <Text style={{color: 'blue', marginLeft: 140, fontSize: 20, marginBottom: 10}}>Playing Golf</Text>
         
          <View>
           <FlatList
          data={datainSport}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index.toString()}></FlatList>
          </View>
        </View>
      );
      const VNJSX= (
          <View style={{ alignContent: 'stretch', justifyContent: 'center', marginTop: 20, padding: 5}}>
              <Text style={{color: 'blue', marginLeft: 140, fontSize: 20, marginBottom: 10}}>Chơi Golf</Text>
           <FlatList
          data={datainSport1}
          renderItem={this._renderItem1}
          keyExtractor={(item, index) => index.toString()}></FlatList>
          </View>
      )
      const {isEng} = this.state;
      const MainJSX = isEng ? EngJSX : VNJSX;

      const {acti, inacti} = styles;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
      < ScrollView>
        <View style={{flex: 1, backgroundColor: '#fff'}}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#fff',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                flex: 1,
                alignItems: 'center',
                paddingVertical: 17,
                marginRight: 1,
              }} onPress={this.Eng.bind(this)}>
              <Text style={isEng ? acti : inacti}>ENG</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                flex: 1,
                alignItems: 'center',
                paddingVertical: 17,
                marginLeft: 1,
              }} onPress={this.VN.bind(this)}>
              <Text style={isEng ? inacti : acti}>VI</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{flex: 9, backgroundColor: 'white'}}>
            {MainJSX}
        </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Title: {
    fontSize: 18,
    color: 'white',
  },
  acti: {
      color : '#FF6347'
  },
  inacti : {
      color : '#D7D7D7'
  }
});