import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  View,
  Text,
  FlatList,
} from 'react-native'

import {
  BannerAd, BannerAdSize, InterstitialAd, AdEventType,
} from 'react-native-google-mobile-ads'

import { showMessage } from 'react-native-flash-message'

import LoadingBox from '../../layout/LoadingBox'

import * as actions from '../../store/actions'

import ReadItem from '../../components/Reads/ReadItem'
import PageTitle from '../../layout/PageTitle'

import { ADMOB } from '../../utilities/appVars'

import { layoutStyles } from '../../theme/main'

const AllReads = ({
  onLoadReads,
  loading,
  reads,
  navigation,
}) => {
  const [interstitialLoaded, setInterstitialLoaded] = useState(false)

  const loadInterstitial = () => {

    const interstitial = InterstitialAd.createForAdRequest(ADMOB.readsInterstitial, {
      requestNonPersonalizedAdsOnly: true
    })

    const unsubscribeLoaded = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        interstitial.show()
        setInterstitialLoaded(true)
      }
    )

    const unsubscribeClosed = interstitial.addAdEventListener(
      AdEventType.CLOSED,
      () => {
        setInterstitialLoaded(true)
        // interstitial.load()
      }
    )

    const unsubscribeError = interstitial.addAdEventListener(
      AdEventType.ERROR,
      () => {
        setInterstitialLoaded(true)
        // interstitial.load()
      }
    )

    interstitial.load()

    return () => {
      unsubscribeClosed()
      unsubscribeLoaded()
      unsubscribeError()
    }
  }

  useEffect(() => {
    let mounted = true

    if (mounted) {
      (async () => {
        const unsubscribeInterstitialEvents = loadInterstitial()
        await onLoadReads()
      })()
    }
    return () => {
      mounted = false
      unsubscribeInterstitialEvents()
    }
  }, [onLoadReads])


  // const startReadHandler = async (readRef, readName) => {
  //   AdMobRewarded.removeAllListeners()
  //   if (ADMOB.showRewardedAds) {
  //     try {
  //       await AdMobRewarded.setAdUnitID(ADMOB.readReward)
  //       await AdMobRewarded.requestAdAsync()
  //       await AdMobRewarded.showAdAsync()
  //     } catch (err) {
  //       console.log(err);
  //       navigation.navigate('Spread', {
  //         readRef,
  //         readName,
  //       })
  //     }
  //     AdMobRewarded.addEventListener('rewardedVideoUserDidEarnReward', reward => {
  //       console.log(`did earn: ${readRef}`);
  //       if (reward.amount === 1) {
  //         navigation.navigate('Spread', {
  //           readRef,
  //           readName,
  //         })
  //       } else {
  //         showMessage({
  //           message: 'يجب مشاهدة الإعلان لتتمكن من القراءة',
  //           type: 'danger',
  //           duration: 2500,
  //         })
  //       }
  //     })
  //     AdMobRewarded.addEventListener('rewardedVideoDidFailToLoad', () => {
  //       navigation.navigate('Spread', {
  //         readRef,
  //         readName,
  //       })
  //     })
  //     AdMobRewarded.addEventListener('rewardedVideoDidFailToPresent', () => {
  //       navigation.navigate('Spread', {
  //         readRef,
  //         readName,
  //       })
  //     })
  //   } else {
  //     navigation.navigate('Spread', {
  //       readRef,
  //       readName,
  //     })
  //   }
  // }

  const startReadHandler = async (readRef, readName) => {
    navigation.navigate('Spread', {
      readRef,
      readName,
    })
  }

  const renderItem = ({ item }) => <ReadItem item={item} startReadHandler={startReadHandler} />

  if (!reads || reads.length === 0 || loading || !interstitialLoaded) {
    return <LoadingBox loadingMessage="تحميل" />
  }

  return (
    <View style={layoutStyles.cover}>
      <View style={layoutStyles.page}>
        <PageTitle
          title="اختر نوع القراءة"
          subTitle="تبدأ القراءة بعد مشاهدة الإعلان"
          marginTop={1}
          marginBottom={10}
        />
        <FlatList
          style={{ width: '100%' }}
          data={reads}
          renderItem={renderItem}
          ListEmptyComponent={<Text>تحميل</Text>}
        />
        {ADMOB.showBannerAds && (
          <View style={layoutStyles.adBannerContainer}>
            <BannerAd
              unitId={ADMOB.readsBanner}
              size={BannerAdSize.FULL_BANNER}
              requestOptions={{
                requestNonPersonalizedAdsOnly: true,
              }}
            />
          </View>
        )}
      </View>
    </View>
  )
}

const mapStateToProps = state => ({
  loading: state.reads.loading,
  reads: state.reads.reads,
})

const mapDispatchToProps = dispatch => ({
  onLoadReads: () => dispatch(actions.loadReads()),
})

AllReads.defaultProps = {
  loading: false,
  reads: null,
  navigation: null,
}

AllReads.propTypes = {
  loading: PropTypes.bool,
  reads: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  onLoadReads: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func),
}

export default connect(mapStateToProps, mapDispatchToProps)(AllReads)
