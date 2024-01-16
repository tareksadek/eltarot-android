import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'

import Learn from '../screens/Learn/Learn'
import ReadsNavigator from './ReadsNavigator'
import CardsNavigator from './CardsNavigator'
import BottomNavigationText from './BottomNavigationText'

import { colors } from '../utilities/appVars'
import { bottomNavigation } from './styles'

const Tab = createBottomTabNavigator()

const BottomNavigation = () => (
  <Tab.Navigator
    headerMode="none"
    screenOptions={{
      tabBarStyle: bottomNavigation.container,
      tabBarActiveBackgroundColor: colors.highlight,
      tabBarActiveTintColor: colors.dark,
      tabBarInactiveTintColor: colors.darker,
    }}
  >
    <Tab.Screen
      name="Learn"
      component={Learn}
      options={{
        headerShown: false,
        tabBarLabel: ({ focused }) => <BottomNavigationText title="تعلم" color={focused ? colors.default : colors.darker} />,
        /* eslint-disable react/prop-types */
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="lightbulb" size={24} color={focused ? colors.default : colors.darker} />
        ),
      }}
    />
    <Tab.Screen
      name="Reads"
      component={ReadsNavigator}
      options={{
        headerShown: false,
        tabBarLabel: ({ focused }) => <BottomNavigationText title="قراءة" color={focused ? colors.default : colors.darker} />,
        /* eslint-disable react/prop-types */
        tabBarIcon: ({ focused }) => (
          <Ionicons name="grid" size={20} color={focused ? colors.default : colors.darker} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: e => {
          e.preventDefault()
          navigation.navigate("Reads", { screen: "AvailableReads" })
        }
      })}
    />
    <Tab.Screen
      name="Cards"
      component={CardsNavigator}
      options={{
        headerShown: false,
        tabBarLabel: ({ focused }) => <BottomNavigationText title="البطاقات" color={focused ? colors.default : colors.darker} />,
        /* eslint-disable react/prop-types */
        tabBarIcon: ({ focused }) => (
          <MaterialIcons name="layers" size={24} color={focused ? colors.default : colors.darker} />
        ),
      }}
      listeners={({ navigation }) => ({
        tabPress: e => {
          e.preventDefault()
          navigation.navigate("Cards", { screen: "AllCards" })
        }
      })}
    />
  </Tab.Navigator>
)

export default BottomNavigation
