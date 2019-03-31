import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import NewActivityHome from '../screens/NewActivityScreens/NewActivityHome';
import NewActivityWarning from '../screens/NewActivityScreens/NewActivityWarning';
import NewActivityDone from '../screens/NewActivityScreens/NewActivityDone';
import CheckUpHome from '../screens/CheckUpScreens/CheckUpHome';
import CheckUpDiagnosis from '../screens/CheckUpScreens/CheckUpDiagnosis';
import CheckUpDone from '../screens/CheckUpScreens/CheckUpDone';
import CheckUpSymptoms from '../screens/CheckUpScreens/CheckUpSymptoms';
import CheckUpSymptomsTwo from '../screens/CheckUpScreens/CheckUpSymptomsTwo';
import LatestDiagnosisScreen from '../screens/LatestDiagnosis';
import InformPartnersScreen from '../screens/InformPartners';
import DiagnosisCleanScreen from '../screens/DiagnosisClean';
import LoadingScreen from '../screens/LoadingScreen';

const NewActivityStack = createStackNavigator({
  NewActivityHome: NewActivityHome,
  NewActivityDone: NewActivityDone,
  NewActivityWarning: NewActivityWarning,
  NewActivityOrder: LoadingScreen,
}, {
    headerMode: 'none',
    initialRouteName: 'NewActivityHome',
  })


const CheckUpStack = createStackNavigator({
  CheckUpHome: CheckUpHome,
  CheckUpDiagnosis: CheckUpDiagnosis,
  CheckUpDone: CheckUpDone,
  CheckUpSymptoms: CheckUpSymptoms,
  CheckUpSymptomsTwo: CheckUpSymptomsTwo,
  CheckUpBooking: LoadingScreen,
}, {
    headerMode: 'none',
    initialRouteName: 'CheckUpHome',
  })

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,
  CheckUp: CheckUpStack,
  NewActivity: NewActivityStack,
  LatestDiagnosis: LatestDiagnosisScreen,
  InformPartners: InformPartnersScreen,
  InformPartnersDone: LoadingScreen,
  DiagnosisClean: DiagnosisCleanScreen,
},
  {
    headerMode: 'none',
    mode: 'modal'
  }
));