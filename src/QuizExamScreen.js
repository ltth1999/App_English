import React, { Component } from "react";
import { StyleSheet, Text, View,Button } from 'react-native'
// import QuizList from '../components/QuizList';
import QuizList from '../components/QuizExam/QuizList';
export default function QuizExamScreen({route}){
  const { itemId } = route.params;
  return (
    <View style={styles.container}>
      <Text>{itemId}</Text>
      <QuizList/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});