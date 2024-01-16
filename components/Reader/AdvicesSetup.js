import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Text,
} from 'react-native'

import { advicesSetup } from './styles'

const AdvicesSetup = ({ readSetup, readType }) => {
  const adviceAnswers = {
    answer: {
      remember: 'تذكر دائمًا أن أفضل طريقة للإجابة على أسئلتك هي التفكير العقلاني',
      oneCard: {
        yes: 'القراءة تميل الى الإجابة بنعم',
        no: 'القراءة تميل الى الإجابة بلا',
      },
      twoCards: {
        opt1: 'القراءة تميل الى الإختيار الأول',
        opt2: 'القراءة تميل الى الإختيار الثاني',
      },
    },
    title: {
      oneCard: 'الإجابة',
      twoCards: 'الإختيار',
      general: 'نصائح',
    },
  }

  let readAdvicetitle = adviceAnswers.title.general

  if (readType === 'one_card') {
    readAdvicetitle = adviceAnswers.title.oneCard
  } else if (readType === 'two_cards') {
    readAdvicetitle = adviceAnswers.title.twoCards
  }

  const setupAdvicesSection = () => {
    let readRows

    if (readType === 'one_card') {
      const cardIndex = Number(readSetup[0][0].lastDroppedItem.positivityIndex)
      readRows = (
        <View style={advicesSetup.textContainer}>
          <Text style={advicesSetup.text}>
            {` - ${cardIndex > 50 ? adviceAnswers.answer.oneCard.yes : adviceAnswers.answer.oneCard.no}`}
          </Text>
        </View>
      )
    } else if (readType === 'two_cards') {
      const optionOneIndex = Number(readSetup[0][0].lastDroppedItem.positivityIndex)
      const optionTwoIndex = Number(readSetup[0][1].lastDroppedItem.positivityIndex)
      readRows = (
        <View style={advicesSetup.textContainer}>
          <Text style={advicesSetup.text}>
            {` - ${optionOneIndex > optionTwoIndex ? adviceAnswers.answer.twoCards.opt1 : adviceAnswers.answer.twoCards.opt2}`}
          </Text>
        </View>
      )
    } else {
      readRows = readSetup.map(
        row => Object.entries(row).map(
          col => {
            if (col[1].takeAdvice) {
              return (
                <View style={advicesSetup.textContainer} key={col[1].lastDroppedItem.id}>
                  <Text style={advicesSetup.text}>{`- ${col[1].lastDroppedItem.adviceAr}`}</Text>
                </View>
              )
            }
            return false
          },
        ),
      )
    }

    return (
      <View style={advicesSetup.listContainer}>
        {readRows}
      </View>
    )
  }

  return (
    <View style={advicesSetup.container}>
      <View style={advicesSetup.titleContainer}>
        <Text style={advicesSetup.title}>
          {readAdvicetitle}
        </Text>
      </View>
      {setupAdvicesSection()}
    </View>
  )
}

AdvicesSetup.defaultProps = {
  readSetup: [],
  readType: null,
}

AdvicesSetup.propTypes = {
  readSetup: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.bool,
    PropTypes.object,
  ]))),
  readType: PropTypes.string,
}

export default AdvicesSetup
