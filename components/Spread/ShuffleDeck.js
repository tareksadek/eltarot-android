import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { Card } from '../../layout/CustomIcons'

import { shuffleDeckStyles } from './styles'

const ShuffleDeck = ({
  isShuffeling, deckHidden, onShuffleAnimationEnd, onClick, cards,
}) => {
  const generateShuffleDeck = () => {
    let shuffleDeack
    const deck = cards
    const delay = (1 / 5) * 1000
    let seconds = 0

    const move = {
      0: {
        transform: [{ translateX: 0 }],
      },
      0.25: {
        transform: [{ translateX: -48 }],
      },
      0.5: {
        transform: [{ translateX: 0 }],
      },
      0.75: {
        transform: [{ translateX: 48 }],
      },
      1: {
        transform: [{ translateX: 0 }],
      },
    }

    const stable = {
      0: {
        transform: [{ translateX: 0 }],
      },
      1: {
        transform: [{ translateX: 0 }],
      },
    }

    if (cards) {
      shuffleDeack = deck.map((card, i) => {
        seconds += delay

        if (i <= 5) {
          return (
            <Animatable.View
              key={card.id}
              duration={1000}
              animation={isShuffeling ? move : stable}
              delay={seconds}
              iterationCount={2}
              useNativeDriver
              style={[
                shuffleDeckStyles.card,
                {
                  zIndex: i,
                  elevation: i,
                },
              ]}
            >
              <TouchableOpacity onPress={() => onClick()}>
                <Card />
              </TouchableOpacity>
            </Animatable.View>
          )
        }
        return true
      })
    }

    return shuffleDeack
  }

  return (
    <Animatable.View
      duration={1000}
      style={shuffleDeckStyles.pactCount}
      animation={deckHidden ? 'zoomOut' : null}
      onAnimationEnd={onShuffleAnimationEnd}
      useNativeDriver
    >
      {generateShuffleDeck()}
    </Animatable.View>
  )
}

ShuffleDeck.defaultProps = {
  isShuffeling: false,
  deckHidden: false,
  cards: null,
}

ShuffleDeck.propTypes = {
  isShuffeling: PropTypes.bool,
  deckHidden: PropTypes.bool,
  onShuffleAnimationEnd: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
}

export default memo(ShuffleDeck)
