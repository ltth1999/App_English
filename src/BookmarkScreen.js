import React from 'react';
import {
  View, 
  Text, 
  Button, 
  StyleSheet, 
  StatusBar,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

const BookmarkScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content"/>
         <View
          style={{
            backgroundColor: '#ff6347',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
        <Ionicons.Button name="ios-menu" size={25} backgroundColor="#ff6347" 
        onPress={() => navigation.openDrawer()}></Ionicons.Button>
        <Text style={{fontSize: 20, color: 'white', fontWeight:'bold'}}> Favorite</Text>
       
      </View>
        
      </View>
    );
};

export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    
  },
});
// import React, { Component } from 'react';
// import { FlatList, View, Text, Alert } from 'react-native';
// import { ListItem } from 'react-native-elements';
// import { connect } from 'react-redux'
// import { Loading } from '../components/Loading';
// import Swipeout from 'react-native-swipeout';
// import { deleteFavorite } from '../redux/ActionCreators';
// import * as Animatable from 'react-native-animatable';

// const mapStateToProps = state => {
//     return {
//       dishes: state.dishes,
//       favorites: state.favorites
//     }
//   }

// const mapDispatchToProps = dispatch => ({
//     deleteFavorite: (dishId) => dispatch(deleteFavorite(dishId))
// })

// class BookmarkScreen extends Component {

//     static navigationOptions = {
//         title: 'My Favorites'
//     };

//     render() {

//         const { navigate } = this.props.navigation;
        
//         const renderMenuItem = ({item, index}) => {
    
//             const rightButton = [
//                 {
//                     text: 'Delete', 
//                     type: 'delete',
//                     onPress: () => {
//                         Alert.alert(
//                             'Delete Favorite?',
//                             'Are you sure you wish to delete the favorite dish ' + item.name + '?',
//                             [
//                                 { 
//                                     text: 'Cancel', 
//                                     onPress: () => console.log(item.name + 'Not Deleted'),
//                                     style: ' cancel'
//                                 },
//                                 {
//                                     text: 'OK',
//                                     onPress: () => this.props.deleteFavorite(item.id)
//                                 }
//                             ],
//                             { cancelable: false }
//                         );
                        
//                     }
//                 }
//             ];          

//             return (
//                 <Swipeout right={rightButton} autoClose={true}>
//                 <Animatable.View animation="fadeInRightBig" duration={2000}>
//                     <ListItem
//                         key={index}
//                         title={item.name}
//                         subtitle={item.description}
//                         hideChevron={true}
//                         onPress={() => navigate('Dishdetail', { dishId: item.id })}
//                         leftAvatar={{ source: {uri: baseUrl + item.image}}}
//                         />
//                 </Animatable.View>
//                 </Swipeout>
//             );
//         };

//         if (this.props.dishes.isLoading) {
//             return(
//                 <Loading />
//             );
//         }
//         else if (this.props.dishes.errMess) {
//             return(
//                 <View>            
//                     <Text>{this.props.dishes.errMess}</Text>
//                 </View>            
//             );
//         }
//         else {
//             return (
//                 <FlatList 
//                     data={this.props.dishes.dishes.filter(dish => this.props.favorites.some(el => el === dish.id))}
//                     renderItem={renderMenuItem}
//                     keyExtractor={item => item.id.toString()}
//                     />
//             );
//         }
//     }
// }


// export default connect(mapStateToProps, mapDispatchToProps)(BookmarkScreen);
