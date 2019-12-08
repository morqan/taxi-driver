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

class PhoneValidateInputScreen extends Component {
  state = {
    mobile: null,
    password: null,

  }
  onPres = () => {
    const {mobile, password} = this.state
    this.isAttempting = true
    // attempt a login - a saga is listening to pick it up from here.
    alert(mobile)
    // this.props.attemptLogin(mobile, password)
    // this.props.navigation.navigate('MapScreen')
  }
  onPhoneNumberChange = () => {
    this.setState({
      code: this.phone.getCountryCode(),
      mobile: this.phone.getValue(),
    });
    // const {mobile, password} = this.state
    // this.props.attemptLogin(mobile, password)

  };
  onPasswordChange = (text) => {
    this.setState({password: text});
    // const {mobile, password} = this.state
    // this.props.attemptLogin(mobile, password)
  };


  render() {
    const {mobile} = this.state
    return (
      <View style={styles.container}>
        <View>


          <View>
            <Text style={{
              fontSize: width * 0.027,
              color: '#BCBEC0',
              marginBottom: width * 0.06
            }}>Phone Number</Text>
            <PhoneInput

              onChangePhoneNumber={this.onPhoneNumberChange}
              initialCountry='az'
              value={mobile} style={{
              fontSize: width * 0.037,
              borderBottomWidth: 1,
              borderColor: '#353535',
              width: '100%',
              marginBottom: width * 0.1296
            }} ref={ref => {
              this.phone = ref;
            }}/>
          </View>


        </View>
        <View style={styles.buttonContainer}>
          <MyButton
            onPress={() => this.props.navigation.navigate('PhoneValidateScreen')}
            // onPress={this.onPres}
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

export default connect(mapStateToProps, mapDispatchToProps)(PhoneValidateInputScreen)
