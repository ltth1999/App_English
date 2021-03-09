import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, FlatList, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Sp1 from '../DataSupport/Sp1';
export default class Support1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
  _renderItem3 = ({item, index}) => {
    return (
      <View style={styles.item}>
        <Text style={{fontSize: 16, marginTop: 10}}>{'- ' + item.title}</Text>
      </View>
    );
  };
  _onPressBack() {
    const {goBack} = this.props.navigation;
    goBack();
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{flexDirection: 'row', padding: 10, borderBottomWidth: 0.3}}>
          <Icon
            onPress={() => this._onPressBack()}
            name="arrowleft"
            size={20}></Icon>
          <Text style={{marginLeft: 100, fontWeight: 'bold'}}>
            Tôi có một số vấn đề
          </Text>
        </View>
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 18, padding: 20, marginTop: 10}}>
            Làm thế nào để giữ vững tốc độ luyện tập chuyên cần?
          </Text>
        </View>
        {/* <View style={{padding: 20}}>
          <Text>
            Để tốc độ luyện tập chuyên cần không bị thiết lập lại, bạn cần kiếm
            ngôi sao mỗi ngày cho đến trước 23:59 để hoàn thành nhiệm vụ trong
            ngày. Bạn có thể thay ngôi sao để hoàn thành mục tiêu trong ngày
            bằng cách nhấp vào các bài học trong các màn hình chính.
          </Text>
        </View> */}
        <FlatList
          data={Sp1}
          renderItem={this._renderItem3}
          keyExtractor={(item, index) => index.toString()}></FlatList>
        <TouchableOpacity onPress={()=>Linking.openURL('https://mail.google.com/mail/mu/mp/129/#co')}
          style={{
            //marginTop: 50,
            marginBottom: 30,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            borderWidth: 1,
            backgroundColor: '#FBD786',
            height: 50,
            borderColor: '#FBD786',
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Text>Did the article help you? Write letter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
