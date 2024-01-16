import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

import { pageTitle } from './styles'

const PageTitle = ({
  title, subTitle, marginTop, marginBottom,
}) => (
  <View style={[
    pageTitle.container,
    {
      marginTop: marginTop || 20,
      marginBottom: marginBottom || 20,
    },
  ]}
  >
    <Text style={pageTitle.title}>{title}</Text>
    <Text style={pageTitle.subTitle}>{subTitle}</Text>
  </View>
)

PageTitle.defaultProps = {
  title: null,
  subTitle: null,
  marginTop: null,
  marginBottom: null,
}

PageTitle.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
}

export default PageTitle
