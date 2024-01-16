import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const readItem = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.darker,
    flexDirection: 'row',
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    borderRadius: 4,
    marginBottom: 10,
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    height: 100,
    opacity: 0.5,
  },
  info: {
    flexDirection: 'column',
    flex: 3,
  },
  readName: {
    fontFamily: 'ReemKufi_400Regular',
    fontSize: 20,
    color: colors.black,
  },
  readDescription: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
    color: colors.black,
    opacity: 0.5,
  },
})

export const savedReadItem = StyleSheet.create({
  container: {
    backgroundColor: colors.darker,
    marginBottom: 10,
    padding: 5,
    borderRadius: 4,
  },
  post: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: colors.darker,
    borderRadius: 4,
    marginBottom: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 5,
  },
  postData: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  postTitle: {
    fontFamily: 'Cairo_600SemiBold',
    fontSize: 13,
  },
  postDescription: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 11,
    opacity: 0.5,
  },
  cardWrapper: {
    padding: 5,
  },
  cardContainer: {
    borderWidth: 1,
    borderColor: colors.highlightLight,
    borderRadius: 4,
    paddingBottom: 4,
    marginBottom: 2.5,
  },
  cardHeader: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row-reverse',
    padding: 5,
    color: colors.black,
  },
})

export const savedReadItemActions = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.darker,
    padding: 5,
    borderRadius: 4,
    flexDirection: 'row',
    width: '50%',
  },
  loadAction: {
    backgroundColor: colors.highlight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 4,
    marginLeft: 5,
    flex: 1,
  },
  loadActionText: {
    fontFamily: 'Cairo_600SemiBold',
    fontSize: 13,
    color: colors.darker,
  },
  deleteAction: {
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 4,
    flex: 1,
  },
  deleteActionText: {
    fontFamily: 'Cairo_600SemiBold',
    fontSize: 13,
    color: colors.darker,
  },
  post: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  postData: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
  postTitle: {
    fontFamily: 'Cairo_600SemiBold',
    fontSize: 13,
  },
  postDescription: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 11,
    opacity: 0.5,
  },
})
