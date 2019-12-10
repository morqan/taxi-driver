import React, {Component} from 'react'
import {View, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
import CodeInput from 'react-native-code-input'
import MyButton from '../Components/MyButton'
import _ from 'lodash';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles

// Styles
import styles from './Styles/PhoneValidateScreenStyle'

class PhoneValidateScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      codeArr: new Array(this.props.codeLength).fill(''),
      currentIndex: 0
    };

    this.codeInputRefs = [];
  }

  _onKeyPress(e) {
    if (e.nativeEvent.key === 'Backspace') {
      const {currentIndex} = this.state;
      let newCodeArr = _.clone(this.state.codeArr);
      const nextIndex = currentIndex > 0 ? currentIndex - 1 : 0;
      for (const i in newCodeArr) {
        if (i >= nextIndex) {
          newCodeArr[i] = '';
        }
      }
      this.props.onCodeChange(newCodeArr.join(''))
      this._setFocus(nextIndex);
    }
  }

  _onInputCode(character, index) {

    const {codeLength, onFulfill, compareWithCode, ignoreCase, onCodeChange} = this.props;
    let newCodeArr = _.clone(this.state.codeArr);
    newCodeArr[index] = character;

    if (index == codeLength - 1) {

      const code = newCodeArr.join('');

      if (compareWithCode) {
        const isMatching = this._isMatchingCode(code, compareWithCode, ignoreCase);
        onFulfill(isMatching, code);
        !isMatching && this.clear();
      } else {
        onFulfill(code);
      }
      this._blur(this.state.currentIndex);
    } else {
      this._setFocus(this.state.currentIndex + 1);
    }

    this.setState(prevState => {
      return {
        codeArr: newCodeArr,
        currentIndex: prevState.currentIndex + 1
      };
    }, () => {
      onCodeChange(newCodeArr.join(''))
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.kodBox}>
          <Text style={styles.kodTitle}>Zəhmət olmasa identifikasiya
            kodunu daxil edin</Text>
          <KeyboardAvoidingView behavior='position' style={{borderBottomWidth: 1}}>
            <CodeInput
              ref="codeInputRef2"
              secureTextEntry
              borderType='circle'
              activeColor='#7C7C7C'
              inactiveColor='#7C7C7C'
              autoFocus={false}
              inputPosition='center'
              codeLength={6}
              size={25}
              // onFulfill={(code) => this._onFinishCheckingCode1(code)}
              containerStyle={{marginTop: 40, marginBottom: 45}}
              codeInputStyle={{borderWidth: 0, backgroundColor: '#D9D9DA'}}
              onChangeText={text => this._onInputCode(text, id)}
              onKeyPress={(e) => this._onKeyPress(e)}
            />
          </KeyboardAvoidingView>

        </View>
        <View style={styles.btnBox}>
          <MyButton
            onPress={() => this.props.navigation.navigate('RegisterScreen')}
            text="OK"
            color="#fff"
            backgroundColor="#451E5D"/>
        </View>

      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneValidateScreen)
