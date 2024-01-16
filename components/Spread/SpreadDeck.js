import React, { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  FlatList,
  Text,
} from 'react-native'

import { spreadStyles } from './styles'
import { colors } from '../../utilities/appVars'

import SpreadDeckCard from './SpreadDeckCard'

const SpreadDeck = ({ cards, onCardSelect, isCardSelected }) => {
  const [listLoaded, setListLoaded] = useState(false)

  useEffect(() => {
    setListLoaded(true)
  }, [])

  const renderItem = ({ item }) => (
    <SpreadDeckCard onCardSelect={() => onCardSelect(item)} isCardSelected={isCardSelected(item)} />
  )

  const getItemLayout = (data, index) => (
    { length: 76, offset: 76 * index, index }
  )

  if (listLoaded) {
    return (
      <View style={spreadStyles.spreadContainer}>
        <FlatList
          columnWrapperStyle={{ flexDirection: 'row' }}
          keyExtractor={item => item.id}
          data={cards}
          renderItem={renderItem}
          ListEmptyComponent={<Text>تحميل</Text>}
          numColumns={6}
          getItemLayout={getItemLayout}
          initialNumToRender={50}
          maxToRenderPerBatch={76}
          windowSize={21}
        />
      </View>
    )
  }

  return (
    <Text style={{
      color: colors.highlight,
      marginTop: 10,
      fontFamily: 'Cairo_400Regular',
      fontSize: 16,
      textAlign: 'center',
    }}
    >
      انتظر نشر البطاقات...
    </Text>
  )
}

SpreadDeck.defaultProps = {
  cards: null,
}

SpreadDeck.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  onCardSelect: PropTypes.func.isRequired,
  isCardSelected: PropTypes.func.isRequired,
}

export default memo(SpreadDeck)
