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
          option1: '(A) must',
          option2: '(B) had better',
          option3: '(C) can',
         
        },
        question: 'Ted is flight from amsterdam took more than 11 hours. He...be exhausted after such a long flight.',
      },
      question2: {
        correctoption: 'option2',
        options: {
          option1: '(A) can not',
          option2: '(B) dont have to',
          option3: '(C) must not',
          
        },
        question:
          'The book is optional. My professor said we could read it if we needed extra credit. But we...read it if we dont want to.',
      },
      question3: {
        correctoption: 'option1',
        options: {
          option1: "(A) couldn't",
          option2: "(B) can't",
          option3: '(C) might not',
          
        },
        question: 'Susan...hear the speaker because the crowd was cheering so loudly.',
      },
      question4: {
        correctoption: 'option2',
        options: {
          option1: '(A) must be',
          option2: '(B) must have been',
          option3: '(C) must',
        },
        question: 'The television is not working. it....dameged during the move',
      },
      question5: {
        correctoption: 'option2',
        options: {
          option1: '(A) will play',
          option2: '(B) will be play ',
          option3: '(C) play',
          option4: '(D) would play',
        },
        question:
          'children...ping-pong when their father comes back home tomorrow.',
      },
      question6: {
        correctoption: 'option1',
        options: {
          option1: '(A) shall have been working',
          option2: '(B) shall work ',
          option3: '(C) have been working',
          option4: '(D) shall be working',
        },
        question:
          'By Christmas, I... for you for 6 months.',
      },
      question7: {
        correctoption: 'option4',
        options: {
          option1: '(A) am being',
          option2: '(B) was being ',
          option3: '(C) have been being',
          option4: '(D) am',
        },
        question:
          'I...in the room now.',
      },
    },
  },
};
export default class Quiz2 extends Component {
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
      this.props.quizFinish((this.score * 100) / 7);
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
              <Text style={styles.text}>Sentences {this.qno}/7</Text>
            </View>
            {/* <View style={styles.title1}>
              <Text style={styles.text}>0%</Text>
            </View> */}
            <TouchableOpacity style={styles.title2}>
              <Text style={styles.text}>LIST</Text>
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
