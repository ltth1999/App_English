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
        correctoption: 'option2',
        options: {
          option1: '(A) has reviewed',
          option2: '(B) had reviewed',
          option3: '(C) will review',
          option4: '(D) reviewed',
        },
        question: ' If he ......the lesson yesterday, he could have done the test better',
      },
      question2: {
        correctoption: 'option4',
        options: {
          option1: '(A) were mending - was pouring',
          option2: '(B) mended - poured',
          option3: '(C) mended - was pouring',
          option4: '(D) were mending - poured',
        },
        question:
          'We .... the roof for Mrs. Smith, an elderly childless woman, when it ....with rain.',
      },
      question3: {
        correctoption: 'option3',
        options: {
          option1: '(A) cover',
          option2: '(B) covered',
          option3: '(C) covering',
          option4: '(D) to cover',
        },
        question: 'A correction pen is used for....your writing mistakes.',
      },
      question4: {
        correctoption: 'option1',
        options: {
          option1: '(A) will she',
          option2: '(B) does she',
          option3: '(C) did she',
          option4: '(D) has she',
        },
        question: 'Your sister won’t go on vacation, ______?',
      },
      question5: {
        correctoption: 'option3',
        options: {
          option1: '(A) got off',
          option2: '(B) come apart ',
          option3: '(C) broke down',
          option4: '(D) set out',
        },
        question:
          'The bus ....on the way here, so I was half an hour late for my appointment.',
      },
      question6: {
        correctoption: 'option4',
        options: {
          option1: '(A) a',
          option2: '(B) an ',
          option3: '(C) the',
          option4: '(D) Ø (no article)',
        },
        question:
          'You do not usually have to go to...hospital to have your ears cleaned.',
      },
      question7: {
        correctoption: 'option3',
        options: {
          option1: '(A) annoy',
          option2: '(B) have ',
          option3: '(C) see',
          option4: '(D) take',
        },
        question:
          'I hope you .... the point of everything your father and I have done for you.',
      },
      question8: {
        correctoption: 'option3',
        options: {
          option1: '(A) fish',
          option2: '(B) duck ',
          option3: '(C) baby',
          option4: '(D) child',
        },
        question:
          'Sometimes in a bad situation, there may still be some good things. Try not tothrow the.... out with the bathwater.',
      },
      question9: {
        correctoption: 'option1',
        options: {
          option1: '(A) brand',
          option2: '(B) model ',
          option3: '(C) trademark',
          option4: '(D) logo',
        },
        question:
          'There are so many .... names now that it is impossible to remember themall.',
      },
      question10: {
        correctoption: 'option1',
        options: {
          option1: '(A) yet ',
          option2: '(B) although  ',
          option3: '(C) so that',
          option4: '(D) because',
        },
        question:
          'The use of computers aids in teaching, ... the role of teachers is still veryimportant.',
      },
    },
  },
};
export default class Quiz4 extends Component {
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
        count: 0,
        question: arrnew[this.qno].question,
        options: arrnew[this.qno].options,
        correctoption: arrnew[this.qno].correctoption,
      });
    } else {
      this.props.quizFinish((this.score * 100) / 10);
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
    const count =this.state.count;
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
              <Text style={styles.text}>Sentences {this.qno}/10</Text>
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
