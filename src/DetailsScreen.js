import React from "react";
import { 
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";


var data = [
  {
        name:'Thank you, Mom!',
        image: require('./asset/audio/audio1.jpg'),
        rating: 5,
        },
        {
          name:'Try to sleep',
          image: require('./asset/audio/audio2.jpg'),
          rating: 4,
        },
        {
          name:'Washing Her Hands',
          image: require('./asset/audio/audio3.png'),
          rating: 4,
          
        },
        {
          name:'A Thin Man',
          image: require('./asset/audio/audio4.jpg'),
          rating: 3,
        },
        {
          name:'A Piece of Paper',
          image: require('./asset/audio/audio5.jpg'),
          rating: 1,
        },
        {
          name:'Buy A New Car',
          image: require('./asset/audio/audio6.png'),
          rating: 2,
      },
      {
        name:'Water and An Apple',
        image: require('./asset/audio/audio7.png'),
        rating: 4,
      },
        {
            name:'Cold Weather',
            image: require('./asset/audio/audio8.png'),
            rating: 5,
        },
        {
          name:'In Love',
          image: require('./asset/audio/audio9.png'),
          rating: 4,
      },
      {
        name:'A Storm',
        image: require('./asset/audio/audio10.jpg'),
        rating: 3,
      },
      {
          name:'Piano Player',
          image: require('./asset/audio/audio11.jpg'),
          rating: 1,
      },
      {
        name:'Work, Work',
        image: require('./asset/audio/audio12.png'),
        rating: 2,
    },
    {
      name:'Write a Letter',
      image: require('./asset/audio/audio13.png'),
      rating: 1,
  },
  {
      name:'Fly Away',
      image: require('./asset/audio/audio14.jpg'),
      rating: 2,
  },
  {
    name:'Melted Cheese',
    image: require('./asset/audio/audio15.png'),
    rating: 4,
  },
    
];

export default class DetailsScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      data: data,
      data_temp: data,
      search: ''
    }
  }

  _rating(item){
    let rating = [];
    for(i=0;i<item;i++){
      rating.push(
        <Image 
          source={require("./asset/audio/star.png")}
          style={{width:15, height:15, marginRight:3}}
          resizeMode="cover"
        />
      )
    }
    return rating;
}
  renderItem = ({item}) => {
    return(
        <LinearGradient 
        colors={['#009245', '#8cc631']}
        start={{x:0, y:1}} end={{x:1, y:0}}
        style={styles.item}
        >
          <View style={styles.image_container}>
              <Image 
                source={item.image}
                style={styles.image}
              />
          </View>
          <View style={styles.content}>
              <Text style={styles.name}>{item.name}</Text>
              <View style={styles.rating}>
                {this._rating(item.rating)}
              </View>
          </View>
          <TouchableOpacity
              onPress={()=>navigation.navigate("BookmarkScreen" )}
              style={styles.heart}>
                <Ionicons 
                  name="ios-heart"
                  color="red"
                  size={19}
                />
              </TouchableOpacity>
         
          <TouchableOpacity 
           onPress={()=>this.props.navigation.navigate("PlaylistScreen" )}
          style={styles.button}>
              <AntDesign 
                name="arrowright"
                color="green"
                size={15}
              />
          </TouchableOpacity>

        </LinearGradient>
    )
  }

  ItemSeparatorComponent = () => {
    return(
      <View 
        style={{
          height:10
        }}
      />
    )
  }

  _search(text){
      let data = [];
      this.state.data_temp.map(function(value){
        if(value.name.indexOf(text) > -1){
          data.push(value);
        }
      });
      this.setState({
        data:data,
        search:text
      });
  }

  render(){
    return(
      <View style={styles.container}>
          <View style={styles.section}>
              <TextInput 
                placeholder="Search.."
                style={{ flex:1, marginLeft:10}}
                value={this.state.search}
                onChangeText={(text)=>this._search(text)}
              />
              <TouchableOpacity
              onPress={()=>this._search("")}
              style={{paddingHorizontal:10}}>
                <Ionicons 
                  name="ios-close"
                  color="gray"
                  size={20}
                />
              </TouchableOpacity>

          </View>
          <View style={styles.flatList}>
              <FlatList 
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(item, index)=>index.toString()}
                ItemSeparatorComponent={this.ItemSeparatorComponent}
                showsVerticalScrollIndicator={false}
              />
          </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    paddingBottom:5
  },
  flatList: {
    flex:1,
    marginTop:10
  },
  item: {
    flex:1,
    paddingVertical:10,
    paddingHorizontal:10,
    flexDirection:'row',
    borderRadius:10,
    width: '96%',
    marginLeft: 8
  },
  image_container: {
    width: 90,
    height: 90
  },
  image: {
    width:'100%',
    height:'100%',
    borderWidth:5,
    borderColor:'white',
    borderRadius:10
  },
  rating: {
    marginTop:5,
    flexDirection:'row'
  },
  content: {
    flex:1,
    justifyContent:'center',
    paddingHorizontal:10
  },
  name: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  button: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center'
  },
  heart: {
    width:30,
    height:30,
    backgroundColor:'white',
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    marginRight: 3
  },
  section: {
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:5,
    paddingHorizontal:10,
    borderRadius:100,
    backgroundColor:'#f2f2f2',
    marginTop:10,
    width:'97%',
    marginLeft: 6

  }
});
