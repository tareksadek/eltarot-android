import React from 'react'
import PropTypes from 'prop-types'

import PageTitle from '../../layout/PageTitle'
import LoadingBox from '../../layout/LoadingBox'

const Messages = ({
  isShuffeling, shuffled, isSpread, maxSelectedCards, selectedCardsLength, shuffleEnded,
}) => (
  <>
    {
      isShuffeling
      && (
        <PageTitle title="" subTitle={null} marginTop={1} marginBottom={1} />
      )
    }
    {
      !shuffled
      && (
        <PageTitle title="إضغط البطاقات لخلطها" subTitle={null} marginTop={1} marginBottom={1} />
      )
    }
    {
      shuffled && !isShuffeling && !isSpread && maxSelectedCards !== selectedCardsLength
      && (
        <PageTitle title="إضغط البطاقات لتوزيعها" subTitle={null} marginTop={1} marginBottom={1} />
      )
    }
    {
      shuffled && !isShuffeling && !isSpread && shuffleEnded
      && (
        <LoadingBox
          loadingMessage="انتظر نشر البطاقات..."
        />
      )
    }
    {
      maxSelectedCards !== selectedCardsLength
      && isSpread
      && (
        <PageTitle
          title={
            `اختر ${maxSelectedCards - selectedCardsLength === 1 ? 'بطاقة واحدة' : maxSelectedCards - selectedCardsLength} ${maxSelectedCards - selectedCardsLength === 1 ? 'للمتابعة ' : 'بطاقات للمتابعة'}`
          }
          subTitle={null}
          marginTop={1}
          marginBottom={1}
        />
      )
    }
  </>
)

Messages.defaultProps = {
  isShuffeling: false,
  shuffled: false,
  isSpread: false,
  shuffleEnded: false,
  maxSelectedCards: 0,
  selectedCardsLength: 0,
}

Messages.propTypes = {
  isShuffeling: PropTypes.bool,
  shuffled: PropTypes.bool,
  isSpread: PropTypes.bool,
  shuffleEnded: PropTypes.bool,
  maxSelectedCards: PropTypes.number,
  selectedCardsLength: PropTypes.number,
}

export default Messages
