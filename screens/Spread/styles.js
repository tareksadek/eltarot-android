import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const spreadStyles = StyleSheet.create({
  pactCount: {
    height: 220,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  spreadContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  cardsContainer: {
    flex: 1,
  },
  cardContainer: {
    borderColor: colors.default,
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3,
    padding: 5,
    borderRadius: 3,
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
  shuffeling: {
    flex: 5,
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
})
