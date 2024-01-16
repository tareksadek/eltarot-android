import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { Picker } from '@react-native-picker/picker'

import { filterStyles } from './styles'

import { SUITS, colors } from '../../utilities/appVars'

const FilterCards = ({ onFilter, onClear }) => {
  const [filterValue, setFilterValue] = useState('')

  const filterChangeHandler = suit => {
    if (suit === 'all') {
      setFilterValue('')
      onClear()
    } else {
      setFilterValue(suit)
      onFilter(suit)
    }
  }

  return (
    <View style={filterStyles.filterContainer}>
      <Picker
        selectedValue={filterValue}
        mode="dropdown"
        dropdownIconColor={colors.highlight}
        style={filterStyles.dropdown}
        itemStyle={filterStyles.dropdownItem}
        onValueChange={itemValue => filterChangeHandler(itemValue)}
      >
        <Picker.Item label="الكل" value="all" fontFamily="Cairo_400Regular" color={colors.black} />
        {SUITS.map(suit => (
          <Picker.Item style={filterStyles.dropdownItem} color={colors.black} label={suit.nameAr} value={suit.name} key={suit.name} />
        ))}
      </Picker>
    </View>
  )
}

FilterCards.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

export default FilterCards
