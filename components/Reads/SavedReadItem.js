import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import { Ionicons } from '@expo/vector-icons'
import SavedReadItemActions from './SavedReadItemActions'

import { savedReadItem } from './styles'

const SavedReadItem = ({ readInfo, onLoadRead, onDeleteRead }) => (
  <View style={savedReadItem.post}>
    <Ionicons name="grid" size={24} color="black" />
    <View style={savedReadItem.postData}>
      <Text style={savedReadItem.postTitle}>{readInfo.readTitleAr}</Text>
      <Text style={savedReadItem.postDescription} numberOfLines={1}>{new Date(readInfo.date).toLocaleString()}</Text>
    </View>
    <SavedReadItemActions onLoadRead={onLoadRead} onDeleteRead={onDeleteRead} />
  </View>
)

SavedReadItem.defaultProps = {
  readInfo: null,
}

SavedReadItem.propTypes = {
  readInfo: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])),
  onLoadRead: PropTypes.func.isRequired,
  onDeleteRead: PropTypes.func.isRequired,
}

export default SavedReadItem
