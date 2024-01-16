import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  ScrollView,
  Text,
  Image,
  Pressable,
  Linking,
  Alert,
} from 'react-native'

import {
  BannerAd, BannerAdSize, InterstitialAd, AdEventType,
} from 'react-native-google-mobile-ads'

import PostItem from '../../components/Learn/PostItem'

import { posts, ADMOB } from '../../utilities/appVars'
import { buttons, misc, layoutStyles } from '../../theme/main'
import { learn } from './styles'

const cardsBannerImage = require('../../assets/cardsbanner.png')

const Learn = ({ navigation }) => {

  const readsHandler = () => {
    navigation.navigate('Root', {
      screen: 'Reads',
    })
  }

  const cardsHandler = () => {
    navigation.navigate('Root', {
      screen: 'Cards',
    })
  }

  const goToPost = async url => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }

  return (
    <View style={layoutStyles.cover}>
      <ScrollView>
        <View style={learn.plainSectionContainer}>
          <Text style={learn.darkTitle}>تعلم التاروت و إكتشف المزيد عن ذاتك</Text>
          <Text style={learn.darkText}>
            التاروت هو أداة قوية للمساعدة في اكتشاف الذات و إدراك الأفكار. التاروت ليس أداة للسحر أو معرفة المستقبل ، التاروت يساعدنا ببساطة في إطلاق أفكارنا وتنظيمها بطرق منطقية في سبيل عيش أفضل حياة ممكنة.
          </Text>
          <Pressable
            style={[
              buttons.fullWidth,
              buttons.main,
              buttons.large,
              buttons.rounded,
              buttons.centered,
            ]}
            onPress={() => readsHandler()}
          >
            <Text style={buttons.mainText}>إبدأ القراءة</Text>
          </Pressable>
        </View>
        <View style={misc.space} />
        <View style={learn.darkSectionContainer}>
          <Image
            style={learn.cardsImage}
            source={cardsBannerImage}
          />
          <View style={learn.darkSectionContent}>
            <Text style={learn.lightTitle}>تعرف على معاني بطاقات التاروت</Text>
            <Text style={learn.lightText}>
              يمكنك البحث عن معنى اي من بطاقات التاروت و التعرف على المجموعات المختلفة للبطاقات
            </Text>
            <Pressable
              style={[
                buttons.fullWidth,
                buttons.dark,
                buttons.darkBordered,
                buttons.large,
                buttons.rounded,
                buttons.centered,
              ]}
              onPress={() => cardsHandler()}
            >
              <Text style={buttons.mainText}>
                إعرض البطاقات
              </Text>
            </Pressable>
          </View>
        </View>
        <View style={misc.space} />
        <View style={misc.space} />
        <View style={misc.space} />
        <View style={misc.space} />
        <Text style={learn.postsTitle}>من المدونة</Text>
        <View style={misc.space} />
        <View style={learn.blogListContainer}>
          {posts.map(post => <PostItem key={post.key} onClickPost={goToPost} post={post} />)}
          <Pressable
            style={[
              buttons.fullWidth,
              buttons.main,
              buttons.large,
              buttons.rounded,
              buttons.centered,
            ]}
            onPress={() => goToPost('https://eltarot.blog/the-review')}
          >
            <Text style={buttons.mainText}>
              كل التدوينات
            </Text>
          </Pressable>
        </View>
      </ScrollView>
      {ADMOB.showBannerAds && (
        <View style={layoutStyles.adBannerContainer}>
          <BannerAd
            unitId={ADMOB.learnBanner}
            size={BannerAdSize.FULL_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      )}
    </View>
  )
}

Learn.defaultProps = {
  navigation: null,
}

Learn.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
}

export default Learn
