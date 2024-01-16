import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const readingCard = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.default,
    marginBottom: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  face: {
    backgroundColor: colors.black,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  back: {
    backgroundColor: colors.black,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    borderRadius: 3,
    borderWidth: 1,
    borderColor: colors.black,
  },
  cardName: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
  },
  cardPosition: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 14,
    opacity: 0.3,
  },
})

export const readingCardsSetup = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.default,
    flexDirection: 'column',
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.default,
    flexDirection: 'row-reverse',
  },
})

export const meaningSection = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: colors.default,
    borderWidth: 1,
    borderColor: colors.darker,
    marginTop: 10,
    borderRadius: 4,
    width: 295,
  },
  header: {
    backgroundColor: colors.darker,
    textAlign: 'center',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    paddingTop: 10,
    paddingBottom: 10,
  },
  title: {
    color: colors.black,
    fontFamily: 'Cairo_400Regular',
    fontSize: 14,
  },
  subTitle: {
    color: colors.black,
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
    opacity: 0.5,
  },
  data: {
    padding: 10,
  },
  media: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 164,
    borderRadius: 4,
  },
  name: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 14,
  },
  keywords: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  keywordsText: {
    color: colors.highlight,
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
  },
  summary: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
  },
  summaryText: {
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
  },
  cardImageCover: {
    width: 100,
    position: 'relative',
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

export const meaningSectionsSetup = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.default,
    flexDirection: 'column',
  },
})

export const advicesSetup = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  listContainer: {
    backgroundColor: colors.black,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    padding: 10,
    width: 295,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    width: 295,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    paddingTop: 10,
  },
  title: {
    color: colors.default,
    fontFamily: 'Cairo_400Regular',
    fontSize: 14,
  },
  textContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginBottom: 25,
  },
  text: {
    color: colors.default,
    textAlign: 'right',
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
    opacity: 0.75,
  },
})
