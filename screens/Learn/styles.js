import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const learn = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.default,
    flexDirection: 'row-reverse',
  },
  plainSectionContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  darkTitle: {
    fontFamily: 'ReemKufi_400Regular',
    fontSize: 22,
    color: colors.black,
    textAlign: 'center',
  },
  darkText: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
    color: colors.black,
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 10,
  },
  darkSectionContainer: {
    position: 'relative',
    backgroundColor: colors.black,
    borderRadius: 4,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 110,
  },
  cardsImage: {
    marginTop: -100,
  },
  darkSectionContent: {
    marginTop: 10,
  },
  lightTitle: {
    fontFamily: 'ReemKufi_400Regular',
    fontSize: 18,
    color: colors.default,
  },
  lightText: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
    color: colors.default,
    marginBottom: 10,
  },
  postsTitle: {
    fontFamily: 'ReemKufi_400Regular',
    fontSize: 22,
    textAlign: 'center',
    color: colors.black,
  },
})
