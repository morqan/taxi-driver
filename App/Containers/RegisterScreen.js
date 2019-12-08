import React, {Component} from 'react'
import {View, Text, Dimensions} from 'react-native'
import {connect} from 'react-redux'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import I18n from '../I18n';
import PhoneInput from 'react-native-phone-input'
import MyInput from '../Components/MyInput';
import MyButton from '../Components/MyButton';

// Styles
import styles from './Styles/RegisterScreenStyle'


const {width} = Dimensions.get('window');

class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>

          <MyInput text={I18n.t('name').toUpperCase()}/>
          <MyInput text={I18n.t('surname')}/>
          <MyInput secureTextEntry={true} text={I18n.t('password')} />
          <MyInput secureTextEntry={true} text={I18n.t('password_confirmation')} />

        </View>
        <View style={styles.buttonContainer}>
          <MyButton  onPress={() => this.props.navigation.navigate('TabScreen')}
                    backgroundColor='#451E5D'
                    color='#fff'
                    borderColor='451E5D'
                    text={I18n.t('next')}
          />

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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
