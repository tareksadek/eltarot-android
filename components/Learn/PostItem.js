import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Pressable,
  ActivityIndicator,
} from 'react-native'

import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import { postItem } from './styles'

const PostItem = ({ onClickPost, post }) => (
  <Pressable
    style={postItem.container}
    onPress={() => onClickPost(post.link)}
  >
    <View style={postItem.post}>
      <MaterialCommunityIcons name="post-outline" size={24} color="black" />
      <View style={postItem.postData}>
        <Text style={postItem.postTitle}>{post.title}</Text>
        <Text style={postItem.postDescription} numberOfLines={1}>{post.description}</Text>
      </View>
      <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
    </View>
  </Pressable>
)

PostItem.defaultProps = {
  post: null,
}

PostItem.propTypes = {
  onClickPost: PropTypes.func.isRequired,
  post: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
}

export default PostItem
