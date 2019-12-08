import React, {Component} from 'react'
import {View, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
import CodeInput from 'react-native-code-input'
import MyButton from '../Components/MyButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles

// Styles
import styles from './Styles/PhoneValidateScreenStyle'

class PhoneValidateScreen extends Component {
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
              codeLength={5}
              size={25}
              onFulfill={(code) => this._onFinishCheckingCode1(code)}
              containerStyle={{marginTop: 40, marginBottom: 45}}
              codeInputStyle={{borderWidth: 0, backgroundColor: '#D9D9DA'}}
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
