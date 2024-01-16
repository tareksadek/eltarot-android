import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const spreadStyles = StyleSheet.create({
  spreadContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    borderColor: colors.default,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    padding: 5,
    borderRadius: 3,
    width: 51,
    height: 76,
  },
})

export const shuffleDeckStyles = StyleSheet.create({
  pactCount: {
    height: 220,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: 155,
    height: 215,
    borderWidth: 1,
    borderColor: colors.default,
    backgroundColor: colors.black,
    borderRadius: 6,
    position: 'absolute',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
