import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { View } from 'react-native'
import { SearchBar } from 'react-native-elements'

import { searchStyles } from './styles'

const SearchCards = ({ onSearch, onClear }) => {
  const [searchValue, setSearchValue] = useState('')

  const searchChangeHandler = searchText => {
    setSearchValue(searchText)
    onSearch(searchText)
  }

  const searchClearHandler = () => {
    setSearchValue('')
    onClear()
  }

  return (
    <View style={searchStyles.container}>
      <SearchBar
        round
        searchIcon={{ size: 24 }}
        onChangeText={text => searchChangeHandler(text)}
        onClear={() => searchClearHandler()}
        placeholder="إسم البطاقة"
        value={searchValue}
        inputStyle={searchStyles.searchInput}
        inputContainerStyle={searchStyles.searchInputContainer}
        containerStyle={searchStyles.searchContainer}
      />
    </View>
  )
}

SearchCards.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

export default SearchCards
