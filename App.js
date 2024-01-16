import 'react-native-gesture-handler'
import React, { useEffect } from 'react'

import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import FlashMessage from 'react-native-flash-message'

import errorReducer from './store/reducers/error'
import notificationReducer from './store/reducers/notification'
import cardsReducer from './store/reducers/cards'
import readsReducer from './store/reducers/reads'
import readerReducer from './store/reducers/reader'

import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'
import BottomNavigation from './layout/BottomNavigation'

import { navigatorHeaderStyles } from './layout/styles'

const Stack = createStackNavigator()

const rootReducer = combineReducers({
  errorCenter: errorReducer,
  notification: notificationReducer,
  cards: cardsReducer,
  reads: readsReducer,
  reader: readerReducer,
})

const store = createStore(
  rootReducer,
  compose(applyMiddleware(ReduxThunk)),
)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer initialRouteName="Home" headerMode="none">
        <Stack.Navigator
          screenOptions={{
            headerTitleStyle: navigatorHeaderStyles.headerTitleStyle,
            headerStyle: navigatorHeaderStyles.headerStyle,
          }}
        >
          <Stack.Screen name="Home" component={WelcomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Root" headerShown={false} component={BottomNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </Provider>
  )
}
