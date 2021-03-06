import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  ScrollView
} from 'react-native';

import { useTheme } from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { useDispatch } from 'react-redux'
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';
import { actEditProfile } from './store/User/action'
import { useNavigation } from '@react-navigation/native'

const EditProfileScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [isSubmit, setIsSubmit] = useState(false)
  const [image, setImage] = useState('https://file.vfo.vn/hinh/2014/10/avatar-buon-khoc-1.png');
  const { colors } = useTheme();
  const [formEdit, setFormEdit] = useState({
    firstName: '',
    lastName: '',
    date: '',
    phone: '',
    email: '',
    country: '',
    city: ''
  })
  console.log("image:",image);
  const validate = () =>{
    if( 
      formEdit.firstName === "" || 
      formEdit.lastName === "" || 
      formEdit.phone === "" ||
      formEdit.city === "" || 
      formEdit.country === "" || 
      formEdit.email === "" ||
      formEdit.date === ""
      ){
      return false
    }
    return true
  }


  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }


  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <ScrollView>
        <Animated.View style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}>

          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={{
                    uri: image,
                  }}

                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}>
                  <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>

            <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
              
          </Text>
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              value={formEdit.firstName}
              onChangeText={text => setFormEdit({ ...formEdit, firstName: text })}
              placeholder="First Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput,isSubmit && formEdit.firstName === "" ? {borderBottomColor:"red", borderBottomWidth:1}: ""]}
            />
            {
              isSubmit && formEdit.firstName === "" &&
              <Text style={{position:"absolute",bottom:"20%",right:"5%", color:"red"}}>
                Please enter here !
              </Text>
            }
            
          </View>
          <View style={styles.action}>
            <FontAwesome name="user-o" color={colors.text} size={20} />
            <TextInput
              value={formEdit.lastName}
              onChangeText={text => setFormEdit({ ...formEdit, lastName: text })}
              placeholder="Last Name"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput,isSubmit && formEdit.lastName === "" ? {borderBottomColor:"red", borderBottomWidth:1}: ""]}
            />
            {
              isSubmit && formEdit.lastName === "" &&
              <Text style={{position:"absolute",bottom:"20%",right:"5%", color:"red"}}>
                Please enter here !
              </Text>
            }
          </View>
          <View style={styles.action}>
            <FontAwesome name="calendar" color={colors.text} size={20} />
            <TextInput
              value={formEdit.date}
              onChangeText={text => setFormEdit({ ...formEdit, date: text })}
              placeholder="Date Of Birth"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput,isSubmit && formEdit.date === "" ? {borderBottomColor:"red", borderBottomWidth:1}: ""]}
            />
            {
              isSubmit && formEdit.date === "" &&
              <Text style={{position:"absolute",bottom:"20%",right:"5%", color:"red"}}>
                Please enter here !
              </Text>
            }
          </View>
          <View style={styles.action}>
            <Feather name="phone" color={colors.text} size={20} />
            <TextInput
              value={formEdit.phone}
              onChangeText={text => setFormEdit({ ...formEdit, phone: text })}
              placeholder="Phone"
              placeholderTextColor="#666666"
              keyboardType="number-pad"
              autoCorrect={false}
              style={[styles.textInput,isSubmit && formEdit.phone === "" ? {borderBottomColor:"red", borderBottomWidth:1}: ""]}
            />
            {
              isSubmit && formEdit.phone === "" &&
              <Text style={{position:"absolute",bottom:"20%",right:"5%", color:"red"}}>
                Please enter here !
              </Text>
            }
          </View>
          <View style={styles.action}>
            <FontAwesome name="envelope-o" color={colors.text} size={20} />
            <TextInput
              value={formEdit.email}
              onChangeText={text => setFormEdit({ ...formEdit, email: text })}
              placeholder="Email"
              placeholderTextColor="#666666"
              keyboardType="email-address"
              autoCorrect={false}
              style={[styles.textInput,isSubmit && formEdit.email === "" ? {borderBottomColor:"red", borderBottomWidth:1}: ""]}
            />
            {
              isSubmit && formEdit.email === "" &&
              <Text style={{position:"absolute",bottom:"20%",right:"5%", color:"red"}}>
                Please enter here !
              </Text>
            }
          </View>
          <View style={styles.action}>
            <FontAwesome name="globe" color={colors.text} size={20} />
            <TextInput
              value={formEdit.country}
              onChangeText={text => setFormEdit({ ...formEdit, country: text })}
              placeholder="Country"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput,isSubmit && formEdit.country === "" ? {borderBottomColor:"red", borderBottomWidth:1}: ""]}
            />
            {
              isSubmit && formEdit.country === "" &&
              <Text style={{position:"absolute",bottom:"20%",right:"5%", color:"red"}}>
                Please enter here !
              </Text>
            }
          </View>
          <View style={styles.action}>
            <Icon name="map-marker-outline" color={colors.text} size={20} />
            <TextInput
              value={formEdit.city}
              onChangeText={text => setFormEdit({ ...formEdit, city: text })}
              placeholder="City"
              placeholderTextColor="#666666"
              autoCorrect={false}
              style={[styles.textInput,isSubmit && formEdit.city === "" ? {borderBottomColor:"red", borderBottomWidth:1}: ""]}
            />
            {
              isSubmit && formEdit.city === "" &&
              <Text style={{position:"absolute",bottom:"20%",right:"5%", color:"red"}}>
                Please enter here !
              </Text>
            }
          </View>
          <TouchableOpacity style={styles.commandButton} onPress={() => 
          {
            setIsSubmit(true)
            if(validate()){
              setTimeout(()=>{
                setFormEdit(false)
              },3000)
              dispatch(actEditProfile(formEdit))
            navigation.goBack()
            }
          }}>
            <Text style={styles.panelButtonTitle}>Submit</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});
