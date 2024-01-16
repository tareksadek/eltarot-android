import React from 'react'

import { View, Text } from 'react-native'

import { cardStyles } from './styles'

const TcardFallback = () => (
  <View
    style={cardStyles.cardWrapper}
  >
    <View style={cardStyles.cardContainer}>
      <View style={cardStyles.cardHeader}>
        <Text style={cardStyles.cardHeaderText}>تحميل</Text>
      </View>
    </View>
  </View>
)

export default TcardFallback
