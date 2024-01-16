import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const welcomeScreenStyles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.default,
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    width: '100%',
  },
  logoText: {
    fontFamily: 'ReemKufi_400Regular',
    fontSize: 28,
  },
  logo: {
    width: 50,
    height: 50,
  },
  noConnectionContainer: {
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
    width: '100%',
    backgroundColor: colors.darker,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noConnectionText: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 16,
    color: colors.black,
  },
})
