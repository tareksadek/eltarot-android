import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const allCardsStyles = StyleSheet.create({
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
