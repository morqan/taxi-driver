import React, {Component} from 'react'
import {View, TextInput, Text, KeyboardAvoidingView} from 'react-native'
import {connect} from 'react-redux'
import MapView, {Marker} from 'react-native-maps'
import I18n from '../I18n'
import MyButton from '../Components/MyButton'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import NewOrderModal from '../Components/NewOrderModal';

// Styles
import styles from './Styles/MapScreenStyle'




class MapScreen extends Component {

  state = {
    latitude: 0,
    longitude: 0,
    error: null
  }

  componentDidMount() {

    navigator.geolocation.getCurrentPosition(
      position => {

        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        })
      },
      error => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000}
    )
  }



  render () {
    return (
      <View style={styles.container}>
        <MapView style={styles.map}
                 showsUserLocation
                 provider={MapView.PROVIDER_GOOGLE}
                 showsMyLocationButton
                 initialRegion={{
                   latitude: this.state.latitude,
                   longitude: this.state.longitude,
                   latitudeDelta: 0.0922,
                   longitudeDelta: 0.0421
                 }}


        >

        </MapView>
        <View style={styles.buttonContainer}>


        </View>
        <NewOrderModal />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen)
