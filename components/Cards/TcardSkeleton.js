import React from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'

import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder'

import { skeletonStyles } from './styles'

const TcardSkeleton = ({ width }) => (
  <View
    style={[
      skeletonStyles.skeletonContainer,
      { width },
    ]}
  >
    <Placeholder
      Animation={Fade}
      style={{ width }}
    >
      <PlaceholderLine width={width} />
      <PlaceholderMedia width={width} style={{ marginBottom: 5 }} />
    </Placeholder>
  </View>
)

TcardSkeleton.defaultProps = {
  width: 0,
}

TcardSkeleton.propTypes = {
  width: PropTypes.number,
}

export default TcardSkeleton
