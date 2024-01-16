import React, { lazy, Suspense } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import { meaningSectionsSetup } from './styles'

const MeaningSection = lazy(() => import('./MeaningSection'))

const MeaningSectionsSetup = ({ readSetup, createdRead }) => {
  const setupMeaningSections = () => {
    let cardsCounter = 0
    let listedCard
    const readRows = readSetup.map(
      row => Object.entries(row).map(
        col => {
          listedCard = createdRead[cardsCounter]
          cardsCounter += 1
          return (
            <View key={col[1].lastDroppedItem.id}>
              <Suspense fallback={<Text>Loading...</Text>}>
                <MeaningSection
                  card={listedCard}
                  position={col[1].nameAr}
                  positionDescription={col[1].descriptionAr}
                />
              </Suspense>
            </View>
          )
        },
      ),
    )

    return (
      <View style={meaningSectionsSetup.container}>
        {readRows}
      </View>
    )
  }

  return (
    <>
      {setupMeaningSections()}
    </>
  )
}

MeaningSectionsSetup.defaultProps = {
  readSetup: [],
  createdRead: [],
}

MeaningSectionsSetup.propTypes = {
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
}

export default MeaningSectionsSetup
