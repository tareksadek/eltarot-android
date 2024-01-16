import React, {
  useEffect, useState, useRef, lazy, Suspense,
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  View,
  Text,
  ActivityIndicator,
} from 'react-native'

// import {
//   AdMobInterstitial,
// } from 'expo-ads-admob'

import { shuffleArray } from '../../utilities/utils'

import * as actions from '../../store/actions'

import { layoutStyles } from '../../theme/main'
import { spreadStyles } from './styles'

import Messages from '../../components/Spread/Messages'
import LoadingBox from '../../layout/LoadingBox'
import { colors } from '../../utilities/appVars'

const ShuffleDeck = lazy(() => import('../../components/Spread/ShuffleDeck'))
const SpreadDeck = lazy(() => import('../../components/Spread/SpreadDeck'))
const Reader = lazy(() => import('../Reader/Reader'))

const Spread = ({
  onLoadCards,
  onLoadCustomReadSetup,
  onCreateRead,
  selectedCards,
  maxSelectedCards,
  loading,
  cards,
  cardsCount,
  readSetup,
  onAddCardToRead,
  route,
}) => {
  const { readRef } = route.params
  const [isSpread, setIsSpread] = useState(false)
  const [isShuffeling, setIsShuffeling] = useState(false)
  const [shuffled, setShuffled] = useState(false)
  const [shuffeledCards, setShuffeledCards] = useState(null)
  const [deckHidden, setDeckHidden] = useState(false)
  const [readStart, setReadStart] = useState(false)
  const [loadingSetup, setLoadingSetup] = useState(false)
  const [shuffleEnded, setShuffleEnded] = useState(false)
  const numberOfSelectedCards = useRef()
  const currentReadRow = useRef(0)
  const currentReadCol = useRef(0)

  numberOfSelectedCards.current = selectedCards.length

  // useEffect(() => {
  //   let mounted = true

  //   if (mounted) {
  //     (async () => {
  //       if (ADMOB.showInterstitialAds) {
  //         AdMobInterstitial.removeAllListeners();
  //         AdMobInterstitial.setAdUnitID(ADMOB.myReadsInterstitial)
  //         const isAdReady = true
  //         await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true })
  //         if (isAdReady) {
  //           await AdMobInterstitial.showAdAsync()
  //         }
  //       }
  //     })()
  //   }

  //   return () => {
  //     mounted = false
  //     // AdMobRewarded.removeAllListeners()
  //     AdMobInterstitial.dismissAdAsync();
  //     AdMobInterstitial.removeAllListeners();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  useEffect(() => {
    let mounted = true

    if (mounted) {
      (async () => {
        if (!cards) {
          await onLoadCards()
          await onLoadCustomReadSetup(readRef)
        } else {
          await onLoadCustomReadSetup(readRef)
        }
      })()
    }

    return () => {
      mounted = false
      // AdMobRewarded.removeAllListeners()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards, onLoadCards, onLoadCustomReadSetup, readRef])

  const spreadDeckHandler = () => {
    setShuffleEnded(true)
    setTimeout(() => {
      setIsSpread(true)
    }, 500)
  }

  const shuffleDeckHandler = () => {
    setIsShuffeling(true)
    setShuffeledCards(shuffleArray([...cards]))
    setTimeout(() => {
      setIsShuffeling(false)
    }, 2000)
    if (!shuffled) {
      setShuffled(true)
    }
  }

  const deckHandler = () => {
    if (!shuffled) {
      shuffleDeckHandler()
      return
    }
    if (!deckHidden) {
      setDeckHidden(true)
    }
  }

  // const excludeCard = cardId => {
  //   const currentCards = [ ...shuffeledCards ]
  //   const newCards = currentCards.filter(card => card.id !== cardId)
  //   setShuffeledCards(newCards)
  // }

  const selectCardHandler = card => {
    const isReversed = Math.random() <= 0.5
    const selectedCard = card

    selectedCard.isFlipped = false
    selectedCard.isReversed = isReversed
    selectedCard.index = numberOfSelectedCards.current

    onAddCardToRead(currentReadRow.current, currentReadCol.current, selectedCard, isReversed)

    if (currentReadCol.current < readSetup[currentReadRow.current].length) {
      currentReadCol.current += 1
    }
    if (readSetup[currentReadRow.current].length === currentReadCol.current) {
      currentReadRow.current += 1
      currentReadCol.current = 0
    }

    numberOfSelectedCards.current += 1

    if (numberOfSelectedCards.current === maxSelectedCards) {
      setIsSpread(false)
      setLoadingSetup(true)
      setTimeout(() => {
        onCreateRead(readRef, false, false)
        setReadStart(true)
        setLoadingSetup(false)
      }, 500)
    }
  }

  const isCardSelected = card => {
    let selected = false

    if (selectedCards.length > 0) {
      selectedCards.map(selectedCard => {
        if (selectedCard === card.id) {
          selected = true
        }
        return selected
      })
    }
    return selected
  }

  if (readStart) {
    return (
      <View style={layoutStyles.cover}>
        <Suspense fallback={<Text>Loading...</Text>}><Reader /></Suspense>
      </View>
    )
  }

  if (loading) { return <LoadingBox loadingMessage="تحميل" /> }

  return (
    <View style={layoutStyles.cover}>
      <View style={spreadStyles.cardsContainer}>
        {loadingSetup && <ActivityIndicator />}
        <Messages
          isShuffeling={isShuffeling}
          shuffled={shuffled}
          isSpread={isSpread}
          maxSelectedCards={maxSelectedCards}
          selectedCardsLength={selectedCards.length}
          shuffleEnded={shuffleEnded}
        />
        {isSpread ? (
          <Suspense fallback={(
            <Text style={{
                color: colors.highlight,
                marginTop: 10,
                fontFamily: 'Cairo_400Regular',
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              انتظر نشر البطاقات...
            </Text>
          )}
          >
            <SpreadDeck
              cards={shuffeledCards || cards}
              cardsCount={cardsCount}
              onCardSelect={selectCardHandler}
              isCardSelected={isCardSelected}
            />
          </Suspense>
        ) : (
          <Suspense fallback={<LoadingBox loadingMessage="تحميل" />}>
            <ShuffleDeck
              cards={shuffeledCards || cards}
              isShuffeling={isShuffeling}
              deckHidden={deckHidden}
              onShuffleAnimationEnd={spreadDeckHandler}
              onClick={deckHandler}
            />
          </Suspense>
        )}
      </View>
    </View>
  )
}

const mapStateToProps = state => ({
  loading: state.cards.loading,
  cards: state.cards.cards,
  cardsCount: state.cards.cardsCount,
  readSetup: state.reader.readSetup,
  readTitleAr: state.reader.readTitleAr,
  selectedCards: state.reader.selectedCards,
  maxSelectedCards: state.reader.maxSelectedCards,
})

const mapDispatchToProps = dispatch => ({
  onLoadCards: () => dispatch(actions.loadCards()),
  onLoadCustomReadSetup: readRef => dispatch(actions.loadCustomReadSetup(readRef)),
  onAddCardToRead: (rowIndex, colIndex, card, cardState) => dispatch(actions.addCard(rowIndex, colIndex, card, cardState)),
  onCreateRead: (readType, isCustomRead, isLoadedRead) => (dispatch(actions.createRead(readType, isCustomRead, isLoadedRead))),
})

Spread.defaultProps = {
  loading: false,
  cards: null,
  cardsCount: 0,
  readSetup: [],
  selectedCards: [],
  maxSelectedCards: null,
  route: null,
}

Spread.propTypes = {
  loading: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  cardsCount: PropTypes.number,
  onLoadCards: PropTypes.func.isRequired,
  onLoadCustomReadSetup: PropTypes.func.isRequired,
  readSetup: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  onAddCardToRead: PropTypes.func.isRequired,
  onCreateRead: PropTypes.func.isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.string),
  maxSelectedCards: PropTypes.number,
  route: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]),
}

export default connect(mapStateToProps, mapDispatchToProps)(Spread)
