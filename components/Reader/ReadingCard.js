import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
  Image,
  Dimensions,
  Pressable,
} from 'react-native'

import FlipCard from 'react-native-flip-card-plus'

import { Card } from '../../layout/CustomIcons'

import { buttons } from '../../theme/main'
import { readingCard } from './styles'

const ReadingCard = ({
  card, position, onFlip, isLoadedRead,
}) => {
  const windowWidth = Dimensions.get('window').width
  const cardWidth = windowWidth <= 360 ? (windowWidth / 3) - 40 : 80
  const cardHeight = (cardWidth / 2) + cardWidth
  const flippedRotate = card.isReversed ? '180deg' : '0deg'
  const cardName = card.nameAr
  const thisCard = useRef(null)

  const flipCardHandler = () => {
    if (!card.isFlipped) {
      onFlip(card.index)
      thisCard.current.flipHorizontal()
    }
  }

  return (
    <View style={readingCard.container}>
      {card.isFlipped ? (
        <Text style={readingCard.cardName} numberOfLines={1}>
          {cardName.length > 12 ? `${cardName.substring(0, 12)}...` : `${cardName}`}
        </Text>
      ) : (
        <Text>&nbsp;</Text>
      )}
      <View style={{
        width: cardWidth + 10,
        height: cardHeight + 10,
      }}
      >
      {isLoadedRead ? (
        <FlipCard
          style={[
            readingCard.card,
            {
              width: cardWidth + 10,
              height: cardHeight + 10,
            },
          ]}
          flipDirection={'h'}
          ref={card => thisCard.current = card}
          swipeable={false}
        >
          <View style={[
            readingCard.back,
            {
              width: cardWidth + 10,
              height: cardHeight + 10,
            },
          ]}
          >
            <Image
              style={[
                readingCard.cardImage,
                {
                  height: cardHeight + 10,
                  transform: [{ rotate: flippedRotate }],
                },
              ]}
              source={{
                uri: `https://eltarot.app/assets/images/cards/${card.image}`,
              }}
            />
          </View>
          <View
            style={[
              readingCard.face,
              {
                width: cardWidth + 10,
                height: cardHeight + 10,
              },
            ]}
          >
            <Card width={`${cardWidth}px`} height={`${cardHeight}px`} />
          </View>

        </FlipCard>
      ) : (
        <FlipCard
          style={[
            readingCard.card,
            {
              width: cardWidth + 10,
              height: cardHeight + 10,
            },
          ]}
          flipDirection={'h'}
          ref={card => thisCard.current = card}
          swipeable={false}
        >
          <View
            style={[
              readingCard.face,
              {
                width: cardWidth + 10,
                height: cardHeight + 10,
              },
            ]}
          >
            <Card width={`${cardWidth}px`} height={`${cardHeight}px`} />
          </View>
          <View style={[
            readingCard.back,
            {
              width: cardWidth + 10,
              height: cardHeight + 10,
            },
          ]}
          >
            <Image
              style={[
                readingCard.cardImage,
                {
                  height: cardHeight + 10,
                  transform: [{ rotate: flippedRotate }],
                },
              ]}
              source={{
                uri: `https://eltarot.app/assets/images/cards/${card.image}`,
              }}
            />
          </View>
        </FlipCard>
      )}

      </View>
      <View>
        {position && (
          <View>
            <Text style={readingCard.cardPosition}>{position}</Text>
          </View>
        )}
      </View>
      {!card.isFlipped && (
        <View>
          <Pressable
            onPress={() => flipCardHandler()}
            style={[
              buttons.fullWidth,
              buttons.main,
              buttons.medium,
              buttons.rounded,
              buttons.centered,
              {
                width: cardWidth + 10,
                marginTop: 5,
              },
            ]}
          >
            <Text
              style={[
                buttons.mainText,
                {
                  fontSize: 12,
                },
              ]}
            >
              إكشف البطاقة
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  )
}

ReadingCard.defaultProps = {
  position: null,
  isLoadedRead: false,
}

ReadingCard.propTypes = {
  card: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ])).isRequired,
  position: PropTypes.string,
  onFlip: PropTypes.func.isRequired,
  isLoadedRead: PropTypes.bool,
}

export default ReadingCard
