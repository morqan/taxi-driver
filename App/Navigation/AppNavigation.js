import {createStackNavigator, createAppContainer} from 'react-navigation'
import TestScreen from '../Containers/TestScreen'
import GainScreen from '../Containers/GainScreen'
import PaymentMethodScreen from '../Containers/PaymentMethodScreen'
import AllOrderScreen from '../Containers/AllOrderScreen'
import OrderScreen from '../Containers/OrderScreen'
import RatingsScreen from '../Containers/RatingsScreen'
import ProfileScreen from '../Containers/ProfileScreen'
import MapScreen from '../Containers/MapScreen'
import TabScreen from '../Containers/TabScreen'
import PhoneValidateScreen from '../Containers/PhoneValidateScreen'
import PhoneValidateInputScreen from '../Containers/PhoneValidateInputScreen'
import LoginScreen from '../Containers/LoginScreen'
import RegisterScreen from '../Containers/RegisterScreen'
import FirstScreen from '../Containers/FirstScreen'
import PlacesScreen from '../Containers/PlacesScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import I18n from '../I18n'
import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  GainScreen: {
    screen: GainScreen,
    navigationOptions: {
      title: I18n.t('qazanc'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }
  },
  PaymentMethodScreen: {screen: PaymentMethodScreen,
    navigationOptions: {
      title: I18n.t('bankHesabı'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }},
  AllOrderScreen: {screen: AllOrderScreen,
    navigationOptions: {
      title: I18n.t('sifarişler'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }},
  OrderScreen: {screen: OrderScreen},
  RatingsScreen: {screen: RatingsScreen},
  ProfileScreen: {screen: ProfileScreen},
  MapScreen: {screen: MapScreen},
  TabScreen: {screen: TabScreen, navigationOptions: {header: null}},
  PhoneValidateScreen: {screen: PhoneValidateScreen,
    navigationOptions: {
      title: I18n.t('register'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }},
  PhoneValidateInputScreen: {screen: PhoneValidateInputScreen,
    navigationOptions: {
      title: I18n.t('register'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }},
  LoginScreen: {screen: LoginScreen,
    navigationOptions: {
      title: I18n.t('login'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }},
  RegisterScreen: {screen: RegisterScreen,
    navigationOptions: {
      title: I18n.t('register'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }},
  PlacesScreen: {screen: PlacesScreen,
    navigationOptions: {
      title: I18n.t('register'),
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#451E5D',
      }
    }},
  FirstScreen: {screen: FirstScreen, navigationOptions: {header: null}},
  TestScreen: {screen: TestScreen},
  LaunchScreen: {screen: LaunchScreen}
}, {
  // Default config for all screens

  initialRouteName: 'PhoneValidateInputScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
