import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import AllReads from '../screens/Reads/AllReads'
import SavedReads from '../screens/Reads/SavedReads'

import { colors } from '../utilities/appVars'
import { readsTabsNavigator } from './styles'

const Tab = createMaterialTopTabNavigator()

const ReadsTabsNavigator = () => (
  <Tab.Navigator
    initialRouteName="AllReads"
    screenOptions={{
      tabBarActiveTintColor: colors.highlight,
      tabBarInactiveTintColor: colors.grey,
      tabBarLabelStyle: readsTabsNavigator.labelStyle,
      tabBarIndicatorStyle: readsTabsNavigator.indicatorStyle,
      tabBarStyle: readsTabsNavigator.tabsContainer,
    }}
  >
    <Tab.Screen
      name="SavedReads"
      component={SavedReads}
      options={{
        tabBarLabel: 'القراءات المحفوظة',
        headerShown: true,
      }}
    />
    <Tab.Screen
      name="AllReads"
      component={AllReads}
      options={{
        tabBarLabel: 'قراءة جديدة',
        headerShown: true,
      }}
    />
  </Tab.Navigator>
)

export default ReadsTabsNavigator
