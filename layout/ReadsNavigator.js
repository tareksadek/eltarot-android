import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import ReadsTabsNavigator from './ReadsTabsNavigator'
import Spread from '../screens/Spread/Spread'
import NavigatorHeader from './NavigatorHeader'

import { navigatorHeaderStyles } from './styles'

const Stack = createStackNavigator()

const ReadsNavigator = () => (
  <Stack.Navigator
    initialRouteName="AvailableReads"
    screenOptions={{
      headerTitleStyle: navigatorHeaderStyles.headerTitleStyle,
      headerStyle: navigatorHeaderStyles.headerStyle,
    }}
  >
    <Stack.Screen
      name="AvailableReads"
      component={ReadsTabsNavigator}
      options={{
        title: <NavigatorHeader title="القراءات" />,
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Spread"
      component={Spread}
      options={
        ({ route }) => ({ title: <NavigatorHeader title={route.params.readName} /> })
      }
    />
  </Stack.Navigator>
)

export default ReadsNavigator
