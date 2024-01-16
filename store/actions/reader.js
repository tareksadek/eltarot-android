import * as actionTypes from './actionTypes'
import { getReadByRef } from '../../API/reads'

export const getCustomReadRequest = () => ({
  type: actionTypes.GET_CUSTOM_READ_REQUEST,
})

export const clearRead = () => ({
  type: actionTypes.CLEAR_READ,
})

export const getCustomReadSetupSuccess = (readSetup, maxSelectedCards, isLoadedRead, readType, readTitle, readTitleAr, readerName, readerBirthDate, readSubject, readQuestion) => ({
  type: actionTypes.GET_CUSTOM_READ_SETUP_SUCCESS,
  readSetup,
  maxSelectedCards,
  isLoadedRead: isLoadedRead || false,
  readType: readType || null,
  readTitle: readTitle || null,
  readTitleAr: readTitleAr || null,
  readerName: readerName || null,
  readerBirthDate: readerBirthDate || null,
  readSubject: readSubject || null,
  readQuestion: readQuestion || null,
})

export const getCustomReadFailure = error => ({
  type: actionTypes.GET_CUSTOM_READ_FAILURE,
  error,
})

export const addCardToRead = (rowIndex, colIndex, card, isReversed) => ({
  type: actionTypes.ADD_CARD_TO_READ,
  rowIndex,
  colIndex,
  card,
  isReversed,
})

export const removeCardFromRead = (rowIndex, colIndex, cardName) => ({
  type: actionTypes.REMOVE_CARD_FROM_READ,
  cardName,
  rowIndex,
  colIndex,
})

export const createReadingCards = (readType, isCustomRead, isLoadedRead, readDate) => ({
  type: actionTypes.CREATE_READING_CARDS,
  readType,
  isCustomRead,
  isLoadedRead,
  readDate,
})

export const reverseCardInRead = (rowIndex, colIndex) => ({
  type: actionTypes.REVERSE_CARD,
  rowIndex,
  colIndex,
})

export const flipCardInRead = index => ({
  type: actionTypes.FLIP_CARD,
  index,
})

export const addReadPrefData = readPref => ({
  type: actionTypes.ADD_READ_PREF,
  readerName: readPref.readerName,
  readerBirthDate: readPref.readerBirthDate,
  readSubject: readPref.readSubject,
  readQuestion: readPref.readQuestion,
})

export const loadCustomReadSetup = readRef => async dispatch => {
  dispatch(getCustomReadRequest())
  dispatch(clearRead())
  try {
    const data = await getReadByRef(readRef)
    const readCardsLength = data[0].setup.reduce((accumulator, row) => accumulator + Object.keys(row).length, 0)
    const dropableSetup = data[0].setup.map(setupBox => Object.entries(setupBox).map(col => ({ ...col[1], accepts: 'all', lastDroppedItem: null })))
    dispatch(getCustomReadSetupSuccess(dropableSetup, readCardsLength, false, data[0].ref, data[0].name, data[0].nameAr))
  } catch (err) {
    dispatch(getCustomReadFailure(err))
  }
}

export const addCard = (rowIndex, colIndex, card, isReversed) => dispatch => {
  dispatch(addCardToRead(rowIndex, colIndex, card, isReversed))
}

export const clearDropArea = (rowIndex, colIndex, cardName) => dispatch => {
  dispatch(removeCardFromRead(rowIndex, colIndex, cardName))
}

export const createRead = (readType, isCustomRead, isLoadedRead, readDate) => dispatch => {
  dispatch(createReadingCards(readType, isCustomRead, isLoadedRead, readDate))
}

export const reverseCard = (rowIndex, colIndex) => dispatch => {
  dispatch(reverseCardInRead(rowIndex, colIndex))
}

export const flipCard = index => dispatch => {
  dispatch(flipCardInRead(index))
}

export const clearReader = () => dispatch => {
  dispatch(clearRead())
}

export const loadSavedRead = read => async dispatch => {
  dispatch(clearRead())
  dispatch(getCustomReadRequest())
  try {
    const readCardsLength = Object.values(read[0].readSetup).reduce((accumulator, row) => accumulator + Object.keys(row).length, 0)
    const loadedRead = Object.values(read[0].readSetup).map(setupBox => [...Object.values(setupBox)].map(col => ({ ...col })))
    dispatch(getCustomReadSetupSuccess(loadedRead, readCardsLength, true, read[0].readType, read[0].readTitle, read[0].readTitleAr))
    dispatch(createReadingCards(read[0].readType, false, true, read[0].date))
  } catch (err) {
    dispatch(getCustomReadFailure(err))
  }
}
