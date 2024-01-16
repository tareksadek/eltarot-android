import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const cardDetailsStyles = StyleSheet.create({
  cardMedia: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImageCover: {
    borderWidth: 1,
    borderColor: colors.highlightLight,
    padding: 4,
    width: 110,
    borderRadius: 4,
    position: 'relative',
  },
  cardImage: {
    width: 100,
    height: 164,
    borderRadius: 2,
  },
  keywordsContainer: {
    backgroundColor: colors.black,
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    width: '100%',
  },
  keywordsTitle: {
    color: colors.default,
    fontFamily: 'ReemKufi_400Regular',
    fontSize: 18,
  },
  keywordsText: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 14,
    color: colors.default,
    opacity: 0.7,
  },
  borderSpace: {
    borderTopWidth: 1,
    borderTopColor: colors.default,
    marginTop: 10,
    marginBottom: 10,
    opacity: 0.2,
  },
  descriptionContainer: {
    marginTop: 20,
  },
  descriptionTitle: {
    fontFamily: 'ReemKufi_400Regular',
    fontSize: 20,
    color: colors.black,
  },
  descriptionText: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 14,
    color: colors.black,
    opacity: 0.7,
  },
  zoomIconContainer: {
    backgroundColor: colors.default,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 5,
    right: 5,
    opacity: 0.8,
    borderRadius: 2,
    padding: 2,
  },
})
