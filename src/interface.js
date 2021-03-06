import React from 'react';
import { 
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from '../styles/Styles';
import books from '../assests/images/books.png';
import openbook from '../assests/images/open-book.png';
import paris from "../assests/images/paris.png";
import Home from "../assests/images/homefrance.png";

import word from "../assests/images/word.png"
//gọi các Screen khác từ đây sang App.js
const Interface =({navigation})=>{
    return(      
        <ImageBackground source={Home} style={{width:"100%",height:"110%"}}>  
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:53}}>
                <Text style={Styles.textHeader}>
                Bonjour, bonne journée
                </Text>
                <View style={Styles.viewInput}>
                    <TextInput placeholder="Muốn ghi gì thì ghi vào đây nhé !" placeholderTextColor="#239dad" style={{fontWeight:'bold',fontSize:13,width:255}} />
                    <Entypo name='paper-plane' color='#239dad' size={16}/>
                </View>
                <View style={Styles.viewContent}>
                    <View>
                        <Text style={Styles.textContent}>Bắt đầu với những bài học</Text>
                        {/* <TouchableOpacity style={Styles.touchContent}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Đặt mục tiêu</Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:35}} />
                        </TouchableOpacity> */}
                        <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2} 
                                        onPress={() => navigation.navigate('QuizList',{diff:'MEDIUM'})}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Bài tập cơ bản</Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:25}} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2} 
                                        onPress={() => navigation.navigate('QuizList',{diff:'HARD'})}>
                            <Text style={{fontWeight:'bold',color:'white'}}>Bài tập nâng cao </Text>
                            <Icon name='arrow-right' color='white' size={20} style={{paddingLeft:5}} />
                        </TouchableOpacity>                     
                    </View>
                    <Image source={paris}
                        style={Styles.imageContent} />
                </View>
                <Text style={Styles.textContent_2}>Góc học tập</Text>
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('TranslateList')}>
                    <View style={Styles.viewCategories} >
                        <Image style={Styles.translateImage} source={books}/>
                        <View style={{paddingHorizontal:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>
                                Traduction
                            </Text>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Dịch từ</Text>
                             <Text style={{color:'white',fontSize:13}}>5000 từ chuẩn Pháp </Text>
                        </View>        
                    </View>           
                </TouchableOpacity>  
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('VocabularyList')}>
                    <View style={Styles.viewCategories} >
                        <Image style={Styles.translateImage} source={openbook}/>
                        <View style={{paddingHorizontal:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>
                                Vocabulaire
                            </Text>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Từ vựng</Text>
                            <Text style={{color:'white',fontSize:13}}>20 chủ đề, 120 từ vựng</Text>
                        </View>      
                    </View>
                </TouchableOpacity>   
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Word')}>
                    <View style={Styles.viewCategories} >
                        <Image style={Styles.translateImage} source={word}/>
                        <View style={{paddingHorizontal:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>                       
                                Leçons mémoire
                            </Text>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Bài học trí nhớ</Text>
                            <Text style={{color:'white',fontSize:13}}>Điền từ vựng</Text>
                        </View>      
                    </View>
                </TouchableOpacity>     
                {/* <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Test')}>
                    <View style={Styles.viewCategories} >
                        <Image style={Styles.translateImage} source={word}/>
                        <View style={{paddingHorizontal:30}}>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>                       
                                Leçons mémoire
                            </Text>
                            <Text style={{color:'white',fontWeight:'bold',fontSize:16}}>Bài học trí nhớ</Text>
                            <Text style={{color:'white',fontSize:13}}>Điền từ vựng</Text>
                        </View>      
                    </View>
                </TouchableOpacity>      */}
            </ScrollView>                                  
        </ImageBackground>
         
);     
}
export default Interface;