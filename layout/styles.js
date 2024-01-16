import { StyleSheet, Platform, StatusBar } from 'react-native'
import { colors } from '../utilities/appVars'

export const navigatorHeaderStyles = StyleSheet.create({
  headerTitleStyle: {
    alignSelf: 'flex-end',
  },
  headerStyle: {
    backgroundColor: colors.default,
  },
  headerContainer: {
    textAlign: 'right',
  },
  headerText: {
    fontFamily: 'ReemKufi_400Regular',
    color: colors.black,
    fontSize: 22,
  },
  dropdownItem: {
    borderRadius: 4,
    fontFamily: 'Cairo_400Regular',
    color: '#fff',
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
})

export const bottomNavigation = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: 60,
    paddingBottom: 0,
  },
  tabText: {
    fontFamily: 'Cairo_400Regular',
    color: colors.dark,
    fontSize: 14,
    paddingBottom: 5,
  },
})

export const readsTabsNavigator = StyleSheet.create({
  tabsContainer: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 0,
  },
  indicatorStyle: {
    backgroundColor: colors.highlight,
  },
  labelStyle: {
    fontFamily: 'Cairo_400Regular',
  },
})

export const pageTitle = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.highlight,
    fontFamily: 'Cairo_600SemiBold',
    fontSize: 16,
  },
  subTitle: {
    color: colors.grey,
    fontFamily: 'Cairo_400Regular',
    fontSize: 10,
  },
})

export const loadingBox = StyleSheet.create({
  container: {
    backgroundColor: colors.default,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: -100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  message: {
    color: colors.black,
    marginTop: 10,
    fontFamily: 'Cairo_400Regular',
    fontSize: 14,
  },
})

export const message = StyleSheet.create({
  container: {
    backgroundColor: colors.default,
  },
  text: {
    color: colors.highlight,
  },
})
