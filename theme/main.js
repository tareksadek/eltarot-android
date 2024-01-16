import { StyleSheet, Platform, StatusBar } from 'react-native'
import { colors } from '../utilities/appVars'

export const layoutStyles = StyleSheet.create({
  cover: {
    backgroundColor: colors.default,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight + 10 : 0,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
    flex: 1,
  },
  scrollCover: {
    backgroundColor: colors.default,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10,
  },
  emptyCover: {
    backgroundColor: colors.default,
    padding: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bar: {
    flexDirection: 'row-reverse',
    width: '100%',
    backgroundColor: colors.darker,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
    borderRadius: 4,
    marginBottom: 6,
  },
  adBannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const buttons = StyleSheet.create({
  fullWidth: {
    alignSelf: 'stretch',
  },
  width300: {
    maxWidth: 300,
  },
  padding: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  rounded: {
    borderRadius: 4,
  },
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    backgroundColor: colors.highlight,
  },
  mainText: {
    color: colors.default,
    fontFamily: 'Cairo_400Regular',
  },
  dark: {
    color: colors.default,
    backgroundColor: colors.black,
  },
  darkBordered: {
    borderWidth: 1,
    borderColor: colors.default,
  },
  darkText: {
    color: colors.black,
    fontFamily: 'Cairo_400Regular',
  },
  transparent: {
    backgroundColor: 'transparent',
  },
  medium: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  large: {
    paddingTop: 15,
    paddingBottom: 15,
  },
})

export const misc = StyleSheet.create({
  space: {
    width: 100,
    height: 10,
  },
})
