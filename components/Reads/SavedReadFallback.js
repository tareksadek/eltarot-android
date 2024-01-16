import React from 'react'

import { View, Text } from 'react-native'

import { savedReadItem } from './styles'

const SavedReadFallback = () => (
  <View
    style={savedReadItem.cardWrapper}
  >
    <View style={savedReadItem.cardContainer}>
      <View style={savedReadItem.cardHeader}>
        <Text>تحميل</Text>
      </View>
    </View>
  </View>
)

export default SavedReadFallback
