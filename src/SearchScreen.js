import React, {Component} from 'react'
import {
  Switch,
  Text,
  TextInput,
  View
} from 'react-native'
import {styles} from '../components/styles'

const english2vietnam = require('../data/JsonTranslate/english_vietnam.json')
const vietnam2english = require('../data/JsonTranslate/vietnam_english.json')


export default class SearchScreen extends Component {

  constructor(props) {
      super(props)

      this.state = {
          input: '',
          output: '',
          switchEn2De: true,
          from: 'English',
          to: 'Vietnamese'
      }
  }

  render() {
      return (
          <View style={ styles.parent }>
              <Text style={ styles.text }>
                   {this.state.from}
              </Text>
              <TextInput text={ this.state.input }
                         autoFocus={true}
                         onChangeText={(e) => this.setState({input: e})}
                         onSubmitEditing={(e) => this.showMeaning(e) }
                         style={ styles.input }
              />

              <Switch onValueChange={(value) => this.switchLanguage(value)}
                      value={this.state.switchEn2De}/>

              <Text style={ styles.germanLabel }>
                   {this.state.to}
              </Text>
            
              <Text style={ styles.germanWord }>
                  { this.state.output }
              </Text>
    
          </View>
      )
  }


  switchLanguage(switchEn2De) {
      if (switchEn2De) {
          this.state.from = 'English'
          this.state.to = ' Vietnamese '
          this.state.switchEn2De = false
      } else {
          this.state.to = 'English '
          this.state.from ='Vietnamese'
          this.state.switchEn2De = true
      }
      this.setState({switchEn2De})
  }

  showMeaning(e) {

      const input = this.state.input.toLowerCase()
      const meaning = input in english2vietnam ?
          english2vietnam[input] :
          null

      const meaningDe = input in vietnam2english ?
          vietnam2english[input] :
          null

      if (meaning) {
          this.switchLanguage(true)
      }

      if (meaningDe) {
          this.switchLanguage(false)
      }

      // Update the state
      this.setState({output: meaning || meaningDe || 'Not Found'})
  }
}

