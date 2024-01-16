import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import { Grid } from 'react-native-animated-spinkit'
import { colors } from '../utilities/appVars'
import { loadingBox } from './styles'

const LoadingBox = ({ loadingMessage, size }) => (
  <View style={loadingBox.container}>
    <Grid style={loadingBox.spinner} size={size || 100} color={colors.highlight} />
    <Text style={loadingBox.message}>{loadingMessage}</Text>
  </View>
)

LoadingBox.defaultProps = {
  loadingMessage: null,
  size: null,
}

LoadingBox.propTypes = {
  loadingMessage: PropTypes.string,
  size: PropTypes.number,
}

export default LoadingBox
