import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const savedReadsStyles = StyleSheet.create({
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
    padding: 10,
  },
  noReadsMessageContainer: {
    backgroundColor: colors.darker,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    borderRadius: 3,
  },
  noReadsMessageText: {
    color: colors.dark,
  },
})
