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
        correctoption: 'option3',
        options: {
          option1: '(A) along',
          option2: '(B) up',
          option3: '(C) away',
          option4: '(D) on',
        },
        question: 'No students can get.... with cheating in the exam.the teacher said',
      },
      question2: {
        correctoption: 'option3',
        options: {
          option1: '(A) gazed',
          option2: '(B) stared',
          option3: '(C) glanced',
          option4: '(D) glared',
        },
        question:
          'He said he couldn’t give me a detailed description of the man because he had only .... at him briefly',
      },
      question3: {
        correctoption: 'option3',
        options: {
          option1: '(A) saw',
          option2: '(B) see',
          option3: '(C) had seen',
          option4: '(D) have seen',
        },
        question: 'The children ran away as if they.... a ghost.',
      },
      question4: {
        correctoption: 'option1',
        options: {
          option1: '(A) hardly',
          option2: '(B) nearly',
          option3: '(C) almost',
          option4: '(D) simply',
        },
        question: 'We were so late that we...had time to catch the train.',
      },
      question5: {
        correctoption: 'option2',
        options: {
          option1: '(A) not involved',
          option2: '(B) were not involved ',
          option3: '(C) will not be involved',
          option4: '(D) wouldn’t be involved',
        },
        question: 'Frankly, I’d rather you .....in that case.',
      },
      question6: {
        correctoption: 'option2',
        options: {
          option1: '(A) the',
          option2: '(B) what',
          option3: '(C) which',
          option4: '(D) those',
        },
        question:   'Most of ....archaeologists know about prehistoric cultures is based on studies of material remains.',
      },
      question7: {
        correctoption: 'option4',
        options: {
          option1: '(A) disgrace',
          option2: '(B) shame ',
          option3: '(C) dishonor',
          option4: '(D) pity',
        },
        question:
          'He was expecting a prison sentence but the judge took .... on him.',
      },
      question8: {
        correctoption: 'option2',
        options: {
          option1: '(A) are taken',
          option2: '(B) were taken ',
          option3: '(C) should be taken',
          option4: '(D) should have been taken',
        },
        question:
          'It is high time that measures .... to prevent further traffic accidents.',
      },
      question9: {
        correctoption: 'option3',
        options: {
          option1: '(A) don’t you',
          option2: '(B) won’t you ',
          option3: '(C) will you',
          option4: '(D) do you',
        },
        question:
          'Don’t drop litter wherever you want, ......?',
      },
    },
  },
};
export default class Quiz3 extends Component {
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
      this.props.quizFinish((this.score * 100) / 9);
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
              <Text style={styles.text}>Sentences {this.qno}/9</Text>
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


