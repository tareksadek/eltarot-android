import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const readerStyles = StyleSheet.create({
  readTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.default,
    flexDirection: 'column',
  },
  title: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 16,
    color: colors.highlight,
  },
  subTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row-reverse',
    opacity: 0.3,
    marginBottom: 20,
  },
  subTitleText: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 10,
  },
  buttonContainer: {
    backgroundColor: colors.default,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 0,
  },
})
