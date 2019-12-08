import React, { Component } from 'react'
import {Button, View, Text, Dimensions} from 'react-native'
import { connect } from 'react-redux'
import Modal, {
  ModalTitle,
  ModalContent,
  ModalFooter,
  ModalButton,
  ScaleAnimation
} from 'react-native-modals'
const {width, height} = Dimensions.get('window')

 // Styles
import styles from './Styles/TestScreenStyle'
import MapView,{Marker} from "react-native-maps";

class TestScreen extends Component {
  state = {
    scaleAnimationModal: false,
  };


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
    let that = this;
    setTimeout(function(){that.setState({  scaleAnimationModal: true,})}, 1000);
    return (
      <View >

        <Modal
          onTouchOutside={() => {
            this.setState({ scaleAnimationModal: false });
          }}
          width={0.9}
          visible={this.state.scaleAnimationModal}
          onSwipeOut={() => this.setState({ scaleAnimationModal: false })}
          modalAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            console.log('onHardwareBackPress');
            this.setState({ scaleAnimationModal: false });
            return true;
          }}
          modalTitle={
            <ModalTitle
              title="YENİ SİFARİŞ"
              align="center"
              style={styles.notificationTitle}
              textStyle={styles.notificationTitle}
            />
          }
          footer={
            <ModalFooter>
              <ModalButton
                text="İMTİNA ET"
                textStyle={{ color: '#451E5D', fontWeight: 'bold' }}
                bordered
                onPress={() => {
                  this.setState({ scaleAnimationModal: false });
                }}
                key="button-1" />
              <ModalButton
                text="QƏBUL ET"
                style={{ backgroundColor: '#451E5D' }}
                textStyle={{ color: '#fff', fontWeight: 'bold' }}
                bordered
                onPress={() => {
                  this.setState({ scaleAnimationModal: false });
                }}
                key="button-2"
              />
            </ModalFooter>
          }
        >
          <ModalContent
            style={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center',height: 150  }}  >
            <View style={styles.container}>
              <MapView style={{flex:1,height:150,width:width*0.8}}
                       showsUserLocation
                       provider={MapView.PROVIDER_GOOGLE}
                       initialRegion={{
                         latitude: this.state.latitude,
                         longitude: this.state.longitude,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421
                       }}


              >
                {<Marker coordinate={this.state}/>}
              </MapView>
              <View style={{ backgroundColor: '#fff'  }}>
                <Text style={styles.notificationTextB}>Təbriz küç 52 / Gənclik Mall.</Text>
              </View>
            </View>

          </ModalContent>
        </Modal>


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

export default connect(mapStateToProps, mapDispatchToProps)(TestScreen)
