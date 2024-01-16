import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import AllCards from '../screens/Cards/AllCards'
import Card from '../screens/Card/Card'
import NavigatorHeader from './NavigatorHeader'

import { navigatorHeaderStyles } from './styles'

const Stack = createStackNavigator()

const CardsNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleStyle: navigatorHeaderStyles.headerTitleStyle,
      headerStyle: navigatorHeaderStyles.headerStyle,
    }}
  >
    <Stack.Screen
      name="AllCards"
      component={AllCards}
      options={{
        title: <NavigatorHeader title="البطاقات" />,
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Card"
      component={Card}
      options={
        ({ route }) => ({ title: <NavigatorHeader title={route.params.cardName} /> })
      }
    />
  </Stack.Navigator>
)

export default CardsNavigator
