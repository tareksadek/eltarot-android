import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Pressable,
} from 'react-native'

import {
  SingleCard, TwoCards, ThreeCards, FourCards, FiveCards,
} from '../../layout/CustomIcons'

import { readItem } from './styles'

const ReadItem = ({ item, startReadHandler }) => {
  let readIcon
  let iconHeight

  switch (item.cards.length) {
    case 2:
      readIcon = <TwoCards />
      iconHeight = 30
      break
    case 3:
      readIcon = <ThreeCards />
      iconHeight = 30
      break
    case 4:
      readIcon = <FourCards />
      iconHeight = 64
      break
    case 5:
      readIcon = <FiveCards />
      iconHeight = 96
      break
    default:
      readIcon = <SingleCard />
      iconHeight = 30
  }

  return (
    <Pressable
      style={readItem.container}
      onPress={() => startReadHandler(item.ref, item.nameAr)}
    >
      <View style={[
        readItem.iconContainer,
        { height: iconHeight },
      ]}
      >
        {readIcon}
      </View>
      <View style={readItem.info}>
        <Text style={readItem.readName}>{item.nameAr}</Text>
        <Text style={readItem.readDescription}>{item.descriptionAr}</Text>
      </View>
    </Pressable>
  )
}

ReadItem.defaultProps = {
  item: null,
}

ReadItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  startReadHandler: PropTypes.func.isRequired,
}

export default ReadItem
