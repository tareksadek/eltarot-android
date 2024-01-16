import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native'

import { savedReadItemActions } from './styles'

const SavedReadItemActions = ({ onLoadRead, onDeleteRead }) => (
  <View style={savedReadItemActions.container}>
    <Pressable
      style={savedReadItemActions.deleteAction}
      onPress={() => onDeleteRead()}
    >
      <Text style={savedReadItemActions.deleteActionText}>حذف</Text>
    </Pressable>
    <Pressable
      style={savedReadItemActions.loadAction}
      onPress={() => onLoadRead()}
    >
      <Text style={savedReadItemActions.loadActionText}>
        مشاهدة
      </Text>
    </Pressable>
  </View>
)

SavedReadItemActions.propTypes = {
  onLoadRead: PropTypes.func.isRequired,
  onDeleteRead: PropTypes.func.isRequired,
}

export default SavedReadItemActions
