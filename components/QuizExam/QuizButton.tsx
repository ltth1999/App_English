import React, {useState} from 'react';
import {Text,View,TouchableOpacity, StyleSheet,Modal} from 'react-native';



interface ButtonProps{
    key: number;
    answer: string;
    onPress: () => void;
    correct: boolean;
    disabled: boolean;
}

const QuizButton =({answer, onPress, correct,disabled})=> {
    return (
        <View style={styles.container}>
            <TouchableOpacity {...{onPress}}  activeOpacity={0.5}
                style={[styles.inner,{borderColor:correct ? "green" : "white" },
                        {borderWidth:correct ? 3 : 2},
                        {backgroundColor:"#25b8d9"}]}
            >
                <Text style={{...styles.label,color: "white"}} 
               >
                {answer}          
                </Text>
            </TouchableOpacity>
        </View>         
    )
}
const styles =StyleSheet.create({
    container:{
        justifyContent:'center',
        width:'50%',
        height:'50%',
        padding:5
    },
    inner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:18
    },
    label:{
        fontSize:18,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        textTransform:'capitalize' ,
        fontWeight: "bold"  
    }

});
export default QuizButton;