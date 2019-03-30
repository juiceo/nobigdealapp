import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import NewActivityHome from '../screens/NewActivityScreens/NewActivityHome';
import NewActivityDone from '../screens/NewActivityScreens/NewActivityDone';
import CheckUpHome from '../screens/CheckUpScreens/CheckUpHome';
import CheckUpChlamydia from '../screens/CheckUpScreens/CheckUpChlamydia';
import CheckUpUrinate from '../screens/CheckUpScreens/CheckUpUrinate';
import CheckUpDone from '../screens/CheckUpScreens/CheckUpDone';
import LatestDiagnosisScreen from '../screens/LatestDiagnosis';

const NewActivityStack = createStackNavigator({
  NewActivityHome: NewActivityHome,
  NewActivityDone: NewActivityDone
}, {
    headerMode: 'none',
    initialRouteName: 'NewActivityHome',
  })


const CheckUpStack = createStackNavigator({
  CheckUpHome: CheckUpHome,
  CheckUpChlamydia: CheckUpChlamydia,
  CheckUpUrinate: CheckUpUrinate,
  CheckUpDone: CheckUpDone,
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
},
  {
    headerMode: 'none',
    mode: 'modal'
  }
));