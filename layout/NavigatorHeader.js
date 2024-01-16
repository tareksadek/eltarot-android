import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import { navigatorHeaderStyles } from './styles'

const NavigatorHeader = ({ title }) => (
  <View style={navigatorHeaderStyles.headerContainer}>
    <Text style={navigatorHeaderStyles.headerText}>{title}</Text>
  </View>
)

NavigatorHeader.defaultProps = {
  title: null,
}

NavigatorHeader.propTypes = {
  title: PropTypes.string,
}

export default NavigatorHeader
