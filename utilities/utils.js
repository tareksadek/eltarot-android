import React from 'react'

import {
  MajorIcon, CupsIcon, SwordsIcon, PentaclesIcon, WandsIcon,
} from '../layout/CustomIcons'

export const updateObj = (oldObj, updatedProps) => ({
  ...oldObj,
  ...updatedProps,
})

export const shuffleArray = array => {
  const adjustedArray = array
  let currentIndex = adjustedArray.length
  let temporaryValue
  let randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    temporaryValue = adjustedArray[currentIndex];
    adjustedArray[currentIndex] = adjustedArray[randomIndex];
    adjustedArray[randomIndex] = temporaryValue;
  }

  return adjustedArray
}

export const customIcons = suitName => {
  switch (suitName) {
    case 'swords': return <SwordsIcon />
    case 'pentacles': return <PentaclesIcon />
    case 'wands': return <WandsIcon />
    case 'cups': return <CupsIcon />
    default: return <MajorIcon />
  }
}
