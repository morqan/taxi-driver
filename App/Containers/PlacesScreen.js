import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import RNGooglePlaces from 'react-native-google-places'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/PlacesScreenStyle'

class PlacesScreen extends Component {
  openSearchModal () {
    RNGooglePlaces.openAutocompleteModal({
        initialQuery: 'vestar',
        locationRestriction: {
          latitudeSW: 6.3670553,
          longitudeSW: 2.7062895,
          latitudeNE: 6.6967964,
          longitudeNE: 4.351055
        },
        country: 'NG',
        type: 'establishment'
      }, ['placeID', 'location', 'name', 'address', 'types', 'openingHours', 'plusCode', 'rating', 'userRatingsTotal', 'viewport']
    )
      .then((place) => {
        console.log(place);
      })
      .catch(error => console.log(error.message)); // error is a Javascript Error object
  }
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.openSearchModal()}>
          <Text>Pick a Place</Text>
        </TouchableOpacity>
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

export default connect(mapStateToProps, mapDispatchToProps)(PlacesScreen)
