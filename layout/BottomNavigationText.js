import React from 'react'
import PropTypes from 'prop-types'

import {
  Text,
} from 'react-native'

import { bottomNavigation } from './styles'

const BottomNavigationText = ({ title, color }) => (
  <Text
    style={[
      bottomNavigation.tabText,
      { color: color },
    ]}
  >
    {title}
  </Text>
)

BottomNavigationText.defaultProps = {
  title: null,
  color: null,
}

BottomNavigationText.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
}

export default BottomNavigationText
