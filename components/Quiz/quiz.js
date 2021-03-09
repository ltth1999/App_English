import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Icon1 from 'react-native-vector-icons/AntDesign';

import Animbutton from './Animbutton';
const {width, height} = Dimensions.get('window');
let arrnew = [];
const jsonData = {
  quiz: {
    quiz1: {
      question1: {
        correctoption: 'option1',
        options: {
          option1: '(A) eat',
          option2: '(B) eats',
          option3: '(C) are eating',
          option4: '(D) is eating',
        },
        question: 'My parents normally .... breakfast at 7:00 a.m.',
      },
      question2: {
        correctoption: 'option2',
        options: {
          option1: '(A) cook',
          option2: '(B) cooks',
          option3: '(C) are cooking',
          option4: '(D) is cooking',
        },
        question:
          'This week Barbara is away on business so Tom ... dinner for himself.',
      },
      question3: {
        correctoption: 'option2',
        options: {
          option1: '(A) has rested - has been being',
          option2: '(B) has been resting - has been',
          option3: '(C) has been resting - has been being',
          option4: '(D) has rested - has been',
        },
        question: 'Mary...(rest) in the garden all day because she ... (be) ill.',
      },
      question4: {
        correctoption: 'option2',
        options: {
          option1: '(A) What',
          option2: '(B) How',
          option3: '(C) Why',
          option4: '(D) When',
        },
        question: '...did the writer feel? Angry',
      },
      question5: {
        correctoption: 'option4',
        options: {
          option1: '(A) have spoken',
          option2: '(B) has spoken ',
          option3: '(C) have not been speaking',
          option4: '(D) has not been speaking',
        },
        question:
          'He ...(not/speak) on the phone for half an hour, just a couple of minutes.',
      },
    },
  },
};
export default class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qno = 0;
    this.score = 0;
    
    const jdata = jsonData.quiz.quiz1;
    arrnew = Object.keys(jdata).map(function (k) {
      return jdata[k];
    });
    this.state = {
      count: 0,
      question: arrnew[this.qno].question,
      options: arrnew[this.qno].options,
      correctoption: arrnew[this.qno].correctoption,
      countCheck: 0,
        quizFinish : true,
        score: 0,
    };
  }
  onPress = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
  _onPressBack(){
    const {goBack} = this.props.navigation;
      goBack()
  }
  _quizFinish(score){    
    this.setState({ quizFinish: true, score : score })
  }

  prev() {
    if (this.qno > 0) {
      this.qno--;
      this.setState({
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    }
  }
  next() {
    if (this.qno < arrnew.length - 1) {
      this.qno++;

      this.setState({
        countCheck: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    } else {
      this.props.quizFinish((this.score * 100) / 5);
    }
  }
  _answer(status, ans) {
    if (status == true) {
      const count = this.state.countCheck + 1;
      this.setState({countCheck: count});
      if (ans == this.state.correctoption) {
        this.score += 1;
      }
    } else {
      const count = this.state.countCheck - 1;
      this.setState({countCheck: count});
      if (this.state.countCheck < 1 || ans == this.state.correctoption) {
        this.score += 0;
      }
    }
  }
 
  render() {
    let _this = this;
    const { count } = this.state;
    const currentOptions = this.state.options;
    const options = Object.keys(currentOptions).map(function (k) {
      return (
        <View key={k} style={{margin: 10}}>
          <Animbutton
            countCheck={_this.state.countCheck}
            onColor={'green'}
            effect={'tada'}
            _onPress={(status) => _this._answer(status, k)}
            text={currentOptions[k]}
          />
        </View>
      );
    });

    return (
      <ScrollView style={{backgroundColor: '#F5FCFF'}}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={styles.title}>
              <Text style={styles.text}>Sentences {this.qno}/5</Text>
            </View>
            {/* <View style={styles.title1}>
              <Text style={styles.text}>0%</Text>
            </View> */}
            <TouchableOpacity style={styles.title2}>
              <Text style={styles.text}>List</Text>
            </TouchableOpacity>
            
          </View>
        </View>
        <View
          style={{
            flex: 1,
            // flexDirection: 'column',
            // justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={styles.oval}>
            <Text style={styles.welcome}>{this.state.question}</Text>
          </View>
          <View>{options}</View> 
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TouchableOpacity onPress={() => this.prev()}>
              <View
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  borderRadius: 10,
                  backgroundColor: 'green',
                  flexDirection: 'row',
                  marginTop: 10
                }}>
                <Icon1 name="stepbackward" size={30} color="white" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.next()}>
              <View
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingRight: 30,
                  paddingLeft: 30,
                  borderRadius: 10,
                  backgroundColor: 'green',
                  flexDirection: 'row',
                  marginTop: 10
                }}>
                <Icon1 name="stepforward" size={30} color="white" />
              </View>
            </TouchableOpacity>
            </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  oval: {
    width: (width * 98) / 100,
    backgroundColor: '#8181F7',
    marginTop: 20,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  welcome: {
    fontSize: 16,
    margin: 15,
    // color: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    borderWidth: 1,
    borderColor: 'white',
    height: 40,
    width: 100,
    backgroundColor: '#6E6E6E',
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
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
    borderRadius: 5,
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
