import React from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  ActivityIndicator,
  Pressable,
} from 'react-native'
/* eslint-disable camelcase */
import {
  useFonts,
  ReemKufi_400Regular,
} from '@expo-google-fonts/reem-kufi'

import {
  Cairo_400Regular,
  Cairo_600SemiBold,
} from '@expo-google-fonts/cairo'

import { useNetInfo } from '@react-native-community/netinfo'

import { buttons, misc } from '../../theme/main'
import { welcomeScreenStyles } from './styles'

import Logo from '../../svgs/Logo'

const WelcomeScreen = ({ navigation }) => {
  const netInfo = useNetInfo()
  const [fontsLoaded] = useFonts({
    ReemKufi_400Regular,
    Cairo_400Regular,
    Cairo_600SemiBold,
  })

  const learnHandler = () => {
    navigation.navigate('Root', {
      screen: 'Learn',
    })
  }

  const cardsHandler = () => {
    navigation.navigate('Root', {
      screen: 'Cards',
    })
  }

  const readsHandler = () => {
    navigation.navigate('Root', {
      screen: 'Reads',
    })
  }

  if (!fontsLoaded) {
    return <ActivityIndicator />
  }

  return (
    <View style={welcomeScreenStyles.container}>
      <View style={welcomeScreenStyles.logoContainer}>
        <Logo />
        <Text style={welcomeScreenStyles.logoText}>التاروت</Text>
      </View>
      {netInfo.isConnected ? (
        <View style={welcomeScreenStyles.buttonsContainer}>
          <Pressable
            style={[
              buttons.fullWidth,
              buttons.main,
              buttons.large,
              buttons.rounded,
              buttons.centered,
            ]}
            onPress={() => readsHandler()}
          >
            <Text style={buttons.mainText}>إبدأ القراءة</Text>
          </Pressable>
          <View style={misc.space} />
          <Pressable
            style={[
              buttons.fullWidth,
              buttons.dark,
              buttons.large,
              buttons.rounded,
              buttons.centered,
            ]}
            onPress={() => cardsHandler()}
          >
            <Text style={buttons.mainText}>
              البطاقات
            </Text>
          </Pressable>
          <View style={misc.space} />
          <Pressable
            style={[
              buttons.fullWidth,
              buttons.transparent,
              buttons.large,
              buttons.rounded,
              buttons.centered,
            ]}
            onPress={() => learnHandler()}
          >
            <Text style={buttons.darkText}>
              تعلم المزيد
            </Text>
          </Pressable>
        </View>
      ) : (
        <View style={welcomeScreenStyles.noConnectionContainer}>
          <Text style={welcomeScreenStyles.noConnectionText}>
            يبدو انك غير متصل بالإنترنت. لا يمكن إستخدام تطبيق التاروت في حالة عدم الإتصال بالإنترنت.
          </Text>
        </View>
      )}
    </View>
  )
}

WelcomeScreen.defaultProps = {
  navigation: null,
}

WelcomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
}

export default WelcomeScreen
