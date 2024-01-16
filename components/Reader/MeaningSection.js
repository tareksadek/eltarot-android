import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable'

import ZoomImage from '../Cards/ZoomImage'

import { meaningSection } from './styles'

const MeaningSection = ({
  card, position, positionDescription,
}) => {
  const [modalVisible, setModalVisible] = useState(false)
  const cardName = card.nameAr
  const keywords = card.uprightAr.replace(/,/g, ' - ')
  const keywordsReversed = card.reversedAr.replace(/,/g, ' - ')
  const summary = card.summaryAr
  const summaryReversed = card.summaryReversedAr

  const flippedRotate = card.isReversed ? '180deg' : '0deg'

  const zoomImage = () => {
    setModalVisible(true)
  }

  const hideImage = () => {
    setModalVisible(false)
  }

  return (
    <Animatable.View
      duration={1000}
      animation={card.isFlipped && 'pulse'}
      iterationCount={2}
      useNativeDriver
      style={[
        meaningSection.container,
        {
          elevation: 0,
        },
      ]}
    >
      <View style={meaningSection.header}>
        <Text style={meaningSection.title}>{position}</Text>
        <Text style={meaningSection.subTitle}>{positionDescription}</Text>
      </View>
      <View style={meaningSection.data}>
        <View style={meaningSection.media}>
          <View style={meaningSection.cardImageCover}>
            <TouchableOpacity onPress={() => zoomImage()}>
              <Image
                style={[
                  meaningSection.image,
                  { transform: [{ rotate: flippedRotate }] },
                ]}
                source={{
                  uri: `https://eltarot.app/assets/images/cards/${card.image}`,
                }}
              />
              <View style={meaningSection.zoomIconContainer}>
                <Feather name="zoom-in" size={30} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          <Text style={meaningSection.name}>
            {cardName}
            {card.isReversed && ' (معكوس) '}
          </Text>
        </View>
        <View style={meaningSection.keywords}>
          <Text style={meaningSection.keywordsText}>{card.isReversed ? keywordsReversed : keywords}</Text>
        </View>
        <View style={meaningSection.summary}>
          <Text style={meaningSection.summaryText}>
            {card.isReversed ? summaryReversed : summary}
          </Text>
        </View>
        <ZoomImage
          modalVisible={modalVisible}
          hideImage={hideImage}
          source={card.image}
          cardName={card.nameAr}
        />
      </View>
    </Animatable.View>
  )
}

MeaningSection.propTypes = {
  card: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])).isRequired,
  position: PropTypes.string.isRequired,
  positionDescription: PropTypes.string.isRequired,
}

export default MeaningSection
