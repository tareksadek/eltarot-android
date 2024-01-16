import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { TouchableOpacity, Dimensions, Animated } from 'react-native'

import { Card } from '../../layout/CustomIcons'
import { colors } from '../../utilities/appVars'

const SpreadDeckCard = ({ onCardSelect, isCardSelected }) => {
  const dropCardAnimation = {
    from: {
      transform: [{ translateY: 0 }],
    },
    to: {
      transform: [{ translateY: Dimensions.get('window').height + 200 }],
    },
  }

  const topValue = useState(new Animated.Value(0))[0]

  const selectCard = () => {
    Animated.timing(topValue, {
      toValue: Dimensions.get('window').height + 200,
      duration: 1000,
      useNativeDriver: true
    }).start()
    onCardSelect()
  }

  return (
    <Animated.View
      style={[
        {
          borderColor: colors.default,
          backgroundColor: colors.black,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 3,
          padding: 5,
          borderRadius: 3,
          width: 51,
          height: 76,
          transform: [{ translateY: topValue }]
        }
      ]}
    >
      <TouchableOpacity onPress={selectCard}>
        <Card width="49px" height="75px" />
      </TouchableOpacity>
    </Animated.View>
  )
}

SpreadDeckCard.defaultProps = {
  isCardSelected: false,
}

SpreadDeckCard.propTypes = {
  onCardSelect: PropTypes.func.isRequired,
  isCardSelected: PropTypes.bool,
}

export default SpreadDeckCard
