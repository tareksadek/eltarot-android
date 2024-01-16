import React, {
  useState, lazy, Suspense, useEffect,
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { showMessage } from 'react-native-flash-message'

import {
  Text,
  View,
  ScrollView,
  Pressable,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import {
  BannerAd, BannerAdSize, InterstitialAd, AdEventType,
} from 'react-native-google-mobile-ads'

import { layoutStyles, buttons } from '../../theme/main'
import { readerStyles } from './styles'

import * as actions from '../../store/actions'

import { MAX_SAVED_READS, ADMOB } from '../../utilities/appVars'

import LoadingBox from '../../layout/LoadingBox'
import PageTitle from '../../layout/PageTitle'

const ReadingCardsSetup = lazy(() => import('../../components/Reader/ReadingCardsSetup'))
const MeaningSectionsSetup = lazy(() => import('../../components/Reader/MeaningSectionsSetup'))
const AdvicesSetup = lazy(() => import('../../components/Reader/AdvicesSetup'))

const Reader = ({
  maxSelectedCards,
  numberOfFlippedCards,
  readSetup,
  readType,
  readTitle,
  readTitleAr,
  readDate,
  isLoadedRead,
  createdRead,
  onFlipCard,
}) => {
  const [saving, setSaving] = useState(false)
  const [readSaved, setReadSaved] = useState(false)
  const [interstitialLoaded, setInterstitialLoaded] = useState(false)

  const loadInterstitial = () => {

    const interstitial = InterstitialAd.createForAdRequest(ADMOB.myReadsInterstitial, {
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
    const unsubscribeInterstitialEvents = loadInterstitial()

    return () => {
      unsubscribeInterstitialEvents()
    }
  }, [])

  const flipCardHandler = cardIndex => {
    onFlipCard(cardIndex)
  }

  const saveExistingRead = async () => {
    setSaving(true)

    let readSetupObject = {}
    let readSetupClone
    for (let i = 0; i < readSetup.length; i += 1) {
      for (let j = 0; j < readSetup[i].length; j += 1) {
        readSetupClone = [...readSetup]
        readSetupClone[i][j].lastDroppedItem.isFlipped = true
        readSetupObject = { ...readSetupObject, [i]: { ...readSetup[i] } }
      }
    }

    const readObj = {
      date: Date.now(),
      readType,
      readTitle,
      readTitleAr,
      readSetup: readSetupObject,
    }

    try {
      const readsData = await AsyncStorage.getItem('reads')

      if (readsData) {
        const reads = JSON.parse(readsData)

        if (reads.length < MAX_SAVED_READS) {
          await AsyncStorage.setItem('reads', JSON.stringify([...reads, readObj]))
          setReadSaved(true)
          showMessage({
            message: 'تم حفظ القراءة بنجاح',
            type: 'success',
            duration: 2500,
          })
        } else {
          showMessage({
            message: 'لقد تجاوزت الحد الأقصى للقراءات المحفوظة. يرجى إزالة واحدة على الأقل من القراءات المحفوظة لتتمكن من المتابعة',
            type: 'warning',
          })
        }
      } else {
        await AsyncStorage.setItem('reads', JSON.stringify([readObj]))
        setReadSaved(true)
        showMessage({
          message: 'تم حفظ القراءة بنجاح',
          type: 'success',
          duration: 2500,
        })
      }
      setSaving(false)
    } catch (err) {
      showMessage({
        message: 'تعذر حفظ القراءة',
        type: 'danger',
        duration: 2500,
      })
    }
  }

  if (saving) { return <LoadingBox loadingMessage="حفظ" /> }

  if (!interstitialLoaded) {
    return <LoadingBox loadingMessage="تحميل" />
  }

  return (
    <View style={[layoutStyles.cover, { paddingTop: 0, paddingBottom: 0 }]}>
      {
        !isLoadedRead && numberOfFlippedCards !== maxSelectedCards && (
          <PageTitle
            title="إكشف كل البطاقات لتعرف معنى القراءة"
            subTitle={null}
            marginTop={1}
            marginBottom={1}
          />
        )
      }
      <ScrollView>
        {readDate && (
          <View style={readerStyles.readTitleContainer}>
            <Text style={readerStyles.title}>{readTitleAr}</Text>
            <View style={readerStyles.subTitleContainer}>
              <Text style={readerStyles.subTitleText}>{new Date(readDate).toLocaleString()}</Text>
            </View>
          </View>
        )}
        <Suspense fallback={<LoadingBox loadingMessage="تحميل" />}>
          <ReadingCardsSetup
            onFlip={flipCardHandler}
            readSetup={readSetup}
            createdRead={createdRead}
            isLoadedRead={isLoadedRead}
          />
        </Suspense>
        {
          numberOfFlippedCards === maxSelectedCards || isLoadedRead ? (
            <>
              <Suspense fallback={<Text>Loading meanings</Text>}>
                <MeaningSectionsSetup
                  readSetup={readSetup}
                  createdRead={createdRead}
                />
              </Suspense>
              <Suspense fallback={<Text>Loading advices</Text>}>
                <AdvicesSetup
                  readSetup={readSetup}
                  readType={readType}
                />
              </Suspense>
            </>
          ) : null
        }
        {(!isLoadedRead && (numberOfFlippedCards === maxSelectedCards) && !readSaved) && (
          <View style={readerStyles.buttonContainer}>
            <Pressable
              style={[
                buttons.width300,
                buttons.padding,
                buttons.main,
                buttons.medium,
                buttons.rounded,
                buttons.centered,
              ]}
              disabled={readSaved}
              onPress={() => saveExistingRead()}
            >
              <Text style={buttons.mainText}>
                حفظ القراءة
              </Text>
            </Pressable>
          </View>
        )}
        {!interstitialLoaded && <Text style={buttons.mainText}>تحميل الإعلان</Text>}
      </ScrollView>
      {ADMOB.showBannerAds && (
        <View style={[layoutStyles.adBannerContainer, { marginTop: 10 }]}>
          <BannerAd
            unitId={ADMOB.readerBanner}
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

const mapStateToProps = state => ({
  maxSelectedCards: state.reader.maxSelectedCards,
  numberOfFlippedCards: state.reader.numberOfFlippedCards,
  createdRead: state.reader.createdRead,
  readSetup: state.reader.readSetup,
  readType: state.reader.readType,
  readTitle: state.reader.readTitle,
  readTitleAr: state.reader.readTitleAr,
  readDate: state.reader.readDate,
  isLoadedRead: state.reader.isLoadedRead,
})

const mapDispatchToProps = dispatch => ({
  onSetNotification: notification => dispatch(actions.setNotification(notification)),
  onFlipCard: index => dispatch(actions.flipCard(index)),
})

Reader.defaultProps = {
  maxSelectedCards: 0,
  numberOfFlippedCards: 0,
  readSetup: [],
  createdRead: [],
  readType: null,
  readTitle: null,
  readTitleAr: null,
  readDate: null,
  isLoadedRead: false,
}

Reader.propTypes = {
  maxSelectedCards: PropTypes.number,
  numberOfFlippedCards: PropTypes.number,
  readSetup: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  readType: PropTypes.string,
  readTitle: PropTypes.string,
  readTitleAr: PropTypes.string,
  readDate: PropTypes.number,
  createdRead: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  onFlipCard: PropTypes.func.isRequired,
  isLoadedRead: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Reader)
