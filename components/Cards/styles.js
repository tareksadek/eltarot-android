import { StyleSheet } from 'react-native'
import { colors } from '../../utilities/appVars'

export const cardStyles = StyleSheet.create({
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
  cardHeaderText: {
    color: colors.black,
  },
  cardName: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 10,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    marginLeft: 2.5,
  },
  cardMedia: {
    width: '100%',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    height: 144,
    borderRadius: 2,
  },
})

export const skeletonStyles = StyleSheet.create({
  skeletonContainer: {
    margin: 10,
  },
})

export const cardListStyles = StyleSheet.create({
  listContainer: {
    alignSelf: 'center',
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
    margin: 5,
  },
})

export const searchStyles = StyleSheet.create({
  container: {
    flex: 2,
    fontFamily: 'Cairo_400Regular',
    height: 65,
  },
  searchContainer: {
    backgroundColor: colors.default,
    borderRadius: 4,
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    flex: 1,
    fontFamily: 'Cairo_400Regular',
    fontSize: 10,
  },
  searchInputContainer: {
    backgroundColor: colors.default,
    borderRadius: 4,
    flex: 1,
    width: '100%',
    minHeight: 45,
  },
  searchInput: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
    height: 55,
    color: colors.black,
  },
})

export const filterStyles = StyleSheet.create({
  filterContainer: {
    backgroundColor: colors.default,
    borderRadius: 4,
    borderWidth: 0,
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    textAlign: 'center',
    height: 65,
    flex: 1,
    marginRight: 5,
  },
  dropdown: {
    textAlign: 'right',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: colors.black,
    fontFamily: 'Cairo_400Regular',
    height: 65,
  },
  dropdownItem: {
    flex: 1,
    borderRadius: 4,
    fontFamily: 'Cairo_400Regular',
    color: '#fff',
    textAlign: 'right',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
})

export const zoomImageStyles = StyleSheet.create({
  modal: {
    backgroundColor: colors.black,
  },
  centeredView: {
    backgroundColor: colors.black,
  },
  cardImageCover: {
    borderWidth: 1,
    borderColor: colors.highlightLight,
    padding: 4,
    width: '100%',
    height: '100%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 2,
  },
  cardName: {
    fontFamily: 'Cairo_400Regular',
    fontSize: 12,
    color: colors.default,
    paddingBottom: 10,
  },
})
