import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const postItem = StyleSheet.create({
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
