import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  ScrollView,
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native'

import { Feather } from '@expo/vector-icons'

import {
  BannerAd, BannerAdSize,
} from 'react-native-google-mobile-ads'

import ZoomImage from '../../components/Cards/ZoomImage'

import { ADMOB } from '../../utilities/appVars'

import { layoutStyles } from '../../theme/main'
import { cardDetailsStyles } from './styles'

const Card = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { cardInfo } = route.params

  if (!cardInfo) {
    return <ActivityIndicator />
  }

  const zoomImage = () => {
    setModalVisible(true)
  }

  const hideImage = () => {
    setModalVisible(false)
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={layoutStyles.scrollCover}>
        <View style={cardDetailsStyles.cardMedia}>
          <View style={cardDetailsStyles.cardImageCover}>
            <TouchableOpacity onPress={() => zoomImage()}>
              <Image
                style={[
                  cardDetailsStyles.cardImage,
                ]}
                source={{
                  uri: `https://eltarot.app/assets/images/cards/${cardInfo.image}`,
                }}
              />
              <View style={cardDetailsStyles.zoomIconContainer}>
                <Feather name="zoom-in" size={30} color="black" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={cardDetailsStyles.keywordsContainer}>
          <Text style={cardDetailsStyles.keywordsTitle}>كلمات في وضع معتدل</Text>
          <Text style={cardDetailsStyles.keywordsText}>{cardInfo.uprightAr.trim()}</Text>
          <View style={cardDetailsStyles.borderSpace} />
          <Text style={cardDetailsStyles.keywordsTitle}>كلمات في وضع معكوس</Text>
          <Text style={cardDetailsStyles.keywordsText}>{cardInfo.reversedAr.trim()}</Text>
        </View>
        <View style={cardDetailsStyles.descriptionContainer}>
          <Text style={cardDetailsStyles.descriptionTitle}>الوصف</Text>
          <Text style={cardDetailsStyles.descriptionText}>{cardInfo.fullMeaningAr.trim()}</Text>
        </View>
        <View style={cardDetailsStyles.descriptionContainer}>
          <Text style={cardDetailsStyles.descriptionTitle}>المعنى في وضع معتدل</Text>
          <Text style={cardDetailsStyles.descriptionText}>{cardInfo.summaryAr.trim()}</Text>
        </View>
        <View style={cardDetailsStyles.descriptionContainer}>
          <Text style={cardDetailsStyles.descriptionTitle}>المعنى في وضع معكوس</Text>
          <Text style={cardDetailsStyles.descriptionText}>{cardInfo.summaryReversedAr.trim()}</Text>
        </View>
      </ScrollView>
      {ADMOB.showBannerAds && (
        <View style={layoutStyles.adBannerContainer}>
          <BannerAd
            unitId={ADMOB.cardDetailsBanner}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      )}
      <ZoomImage
        modalVisible={modalVisible}
        hideImage={hideImage}
        source={cardInfo.image}
        cardName={cardInfo.nameAr}
      />
    </View>
  )
}

Card.defaultProps = {
  route: null,
}

Card.propTypes = {
  route: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]),
}

export default Card
