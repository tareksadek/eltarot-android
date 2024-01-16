import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { customIcons } from '../../utilities/utils'

import { cardStyles } from './styles'

const Tcard = ({
  cardInfo, showDetails, width,
}) => {
  const cardName = cardInfo.nameAr

  return (
    <TouchableOpacity onPress={showDetails}>
      <View
        style={[
          cardStyles.cardWrapper,
          { width },
        ]}
      >
        <View style={cardStyles.cardContainer}>
          <View style={cardStyles.cardHeader}>
            <View style={cardStyles.iconContainer}>
              {customIcons(cardInfo.type ? cardInfo.type : 'major')}
            </View>
            <Text style={cardStyles.cardName} numberOfLines={cardInfo.type === 'pentacles' ? 1 : 2}>{cardName}</Text>
          </View>
          <View style={cardStyles.cardMedia}>
            <Image
              style={[
                cardStyles.cardImage,
                { width: width - 20 },
              ]}
              source={{
                uri: `https://eltarot.app/assets/images/cards/${cardInfo.image}`,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

Tcard.defaultProps = {
  cardInfo: null,
  width: 0,
}

Tcard.propTypes = {
  cardInfo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  showDetails: PropTypes.func.isRequired,
  width: PropTypes.number,
}

export default Tcard
