import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import LoadingBox from '../../layout/LoadingBox'

import { readingCardsSetup } from './styles'

const ReadingCard = lazy(() => import('./ReadingCard'))

const ReadingCardsSetup = ({
  readSetup, createdRead, onFlip, isLoadedRead,
}) => {
  let cardsCounter = 0
  let listedCard
  const setUpReadColumns = row => Object.entries(row).map(
    col => {
      listedCard = createdRead[cardsCounter]
      cardsCounter += 1
      return (
        <View
          key={col[1].lastDroppedItem.id}
          style={[
            readingCardsSetup.column,
          ]}
        >
          <Suspense fallback={<Text>Loading...</Text>}>
            <ReadingCard
              card={listedCard}
              onFlip={onFlip}
              isReversed={listedCard.isReversed}
              position={col[1].nameAr}
              isLoadedRead={isLoadedRead}
            />
          </Suspense>
        </View>
      )
    },
  )

  const setupReadCards = () => {
    const readRows = readSetup.map(
      row => (
        <View style={readingCardsSetup.row} key={row[0].lastDroppedItem.id}>
          {setUpReadColumns(row)}
        </View>
      ),
    )

    return (
      <View style={readingCardsSetup.container}>
        {readRows}
      </View>
    )
  }

  return (
    <>
      {createdRead ? setupReadCards() : <LoadingBox loadingMessage="تحميل" />}
    </>
  )
}

ReadingCardsSetup.defaultProps = {
  readSetup: [],
  createdRead: [],
  isLoadedRead: false,
}

ReadingCardsSetup.propTypes = {
  readSetup: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  createdRead: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  onFlip: PropTypes.func.isRequired,
  isLoadedRead: PropTypes.bool,
}

export default ReadingCardsSetup
