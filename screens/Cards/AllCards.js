import React, {
  useEffect, useState, lazy, Suspense,
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  View,
  FlatList,
  Dimensions,
  Text,
} from 'react-native'

import { layoutStyles } from '../../theme/main'
import { allCardsStyles } from './styles'

import * as actions from '../../store/actions'

import TcardSkeleton from '../../components/Cards/TcardSkeleton'
import SearchCards from '../../components/Cards/SearchCards'
import FilterCards from '../../components/Cards/FilterCards'
import LoadingBox from '../../layout/LoadingBox'

const Tcard = lazy(() => import('../../components/Cards/Tcard'))

const AllCards = ({
  onLoadCards,
  loading,
  cards,
  cardsCount,
  cardsPerPage,
  navigation,
}) => {
  const [searchedCards, setSearchedCards] = useState(null)
  const [filterededCards, setFilteredCards] = useState(null)

  useEffect(() => {
    let mounted = true

    if (mounted && !cards) {
      (async () => { onLoadCards() })()
    }

    return () => { mounted = false }
  }, [cards, onLoadCards])

  const clickCardHandler = item => {
    navigation.navigate('Card', {
      cardInfo: item,
      cardName: item.nameAr,
    })
  }

  const renderItem = ({ item }) => {
    const screenWidth = Dimensions.get('window').width - 20
    const numColumns = 3
    const tileSize = (screenWidth / numColumns)
    return <Suspense fallback={<TcardSkeleton width={tileSize - 20} />}><Tcard cardInfo={item} width={tileSize} showDetails={() => clickCardHandler(item)} /></Suspense>
  }

  const emptyItem = () => {
    let cardsList = []
    const screenWidth = Dimensions.get('window').width - 20
    const numColumns = 3
    const tileSize = (screenWidth / numColumns)
    cardsList = [...Array(24)].map((_, i) => (
      <TcardSkeleton width={tileSize - 20} key={i} />
    ))
    return cardsList
  }

  const createCardsPages = () => {
    const count = Math.ceil(cardsCount / cardsPerPage)
    let pageList = []
    if (searchedCards && searchedCards.length === 0) {
      return (
        <View style={allCardsStyles.noReadsMessageContainer}>
          <Text style={allCardsStyles.noReadsMessageText}>
            لا توجد بطاقات بهذا الإسم
          </Text>
        </View>
      )
    }
    if (searchedCards) {
      pageList = (
        <View style={[layoutStyles.page, { paddingBottom: 80 }]}>
          <FlatList
            columnWrapperStyle={{ flexDirection: 'row-reverse' }}
            data={searchedCards}
            renderItem={renderItem}
            ListEmptyComponent={emptyItem}
            numColumns={3}
          />
        </View>
      )
    } else if (filterededCards) {
      pageList = (
        <View style={[layoutStyles.page, { paddingBottom: 80 }]}>
          <FlatList
            columnWrapperStyle={{ flexDirection: 'row-reverse' }}
            data={filterededCards}
            renderItem={renderItem}
            ListEmptyComponent={emptyItem}
            numColumns={3}
          />
        </View>
      )
    } else {
      pageList = [...Array(count)].map((_, i) => (
        <View style={[layoutStyles.page, { paddingBottom: 80 }]} key={i}>
          <FlatList
            columnWrapperStyle={{ flexDirection: 'row-reverse' }}
            data={cards && cards}
            renderItem={renderItem}
            ListEmptyComponent={emptyItem}
            numColumns={3}
            initialNumToRender={9}
            maxToRenderPerBatch={30}
            windowSize={21}
          />
        </View>
      ))
    }

    return pageList
  }

  const searchCardsHandler = searchKeyword => {
    const searchFor = searchKeyword.toLowerCase()

    if (searchFor.length >= 3) {
      setSearchedCards(cards.filter(card => {
        const searchName = card.nameAr
        if (searchName.toLowerCase().includes(searchFor)) {
          return true
        }
        return false
      }))
    } else {
      setSearchedCards(null)
    }

    return false
  }

  const clearSearchHandler = () => {
    setSearchedCards(null)
  }

  const filterCardsHandler = filterValue => {
    clearSearchHandler()
    const filterBy = filterValue.toLowerCase()

    setFilteredCards(cards.filter(card => {
      if (card.type.toLowerCase() === filterBy) {
        return true
      }

      return false
    }))

    return false
  }

  const clearFilterHandler = () => {
    setFilteredCards(null)
  }

  if (!cards || cards.length === 0 || loading) {
    return (
      <View style={layoutStyles.emptyCover}>
        <LoadingBox loadingMessage="تحميل" />
      </View>
    )
  }

  return (
    <View style={layoutStyles.cover}>
      <View style={layoutStyles.bar}>
        <SearchCards onSearch={searchCardsHandler} onClear={clearSearchHandler} />
        <FilterCards onFilter={filterCardsHandler} onClear={clearFilterHandler} />
      </View>
      {createCardsPages()}
    </View>
  )
}

const mapStateToProps = state => ({
  loading: state.cards.loading,
  cards: state.cards.cards,
  cardsCount: state.cards.cardsCount,
  cardsPerPage: state.cards.cardsPerPage,
})

const mapDispatchToProps = dispatch => ({
  onLoadCards: () => dispatch(actions.loadCards()),
})

AllCards.defaultProps = {
  loading: false,
  cards: null,
  cardsCount: 0,
  cardsPerPage: 0,
  navigation: null,
}

AllCards.propTypes = {
  loading: PropTypes.bool,
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  cardsCount: PropTypes.number,
  cardsPerPage: PropTypes.number,
  onLoadCards: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.func),
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCards)
