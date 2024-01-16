import React, {
  lazy, Suspense, useState, useEffect,
} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { showMessage } from 'react-native-flash-message'

import {
  View,
  Text,
  FlatList,
  Pressable,
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import SavedReadFallback from '../../components/Reads/SavedReadFallback'
import LoadingBox from '../../layout/LoadingBox'
import PageTitle from '../../layout/PageTitle'

import * as actions from '../../store/actions'

import { layoutStyles, buttons } from '../../theme/main'
import { savedReadsStyles } from './styles'

const SavedReadItem = lazy(() => import('../../components/Reads/SavedReadItem'))
const Reader = lazy(() => import('../Reader/Reader'))

const SavedReads = ({ navigation, onLoadRead, onClearReader }) => {
  const [reads, setReads] = useState(null)
  const [readStart, setReadStart] = useState(false)

  const getSavedReads = async () => {
    try {
      const savedReads = await AsyncStorage.getItem('reads')
      if (savedReads !== null) {
        setReads(
          JSON.parse(savedReads).sort((a, b) => {
            if (b.date > a.date) {
              return 1
            }
            if (a.date > b.date) {
              return -1
            }
            return 0
          }),
        )
      } else {
        setReads([])
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    const tabFocused = navigation.addListener('focus', async () => {
      try {
        await getSavedReads()
      } catch (err) {
        throw new Error(err)
      }
    })

    return tabFocused
  }, [navigation])

  const loadSavedReadHandler = async readDate => {
    try {
      const loadedRead = reads.filter(read => read.date === readDate)
      await onLoadRead(loadedRead)
      setReadStart(true)
    } catch (err) {
      throw new Error(err)
    }
  }

  const backToListHandler = () => {
    setReadStart(false)
    onClearReader()
  }

  const deleteReadHandler = async readDate => {
    try {
      const remainingReads = reads.filter(read => read.date !== readDate)
      await AsyncStorage.setItem('reads', JSON.stringify(remainingReads))
      setReads(remainingReads)
      showMessage({
        message: 'تم حذف القراءة بنجاح',
        type: 'success',
        duration: 2500,
      })
    } catch (err) {
      showMessage({
        message: 'تعذر حذف القراءة',
        type: 'danger',
        duration: 2500,
      })
    }
  }

  const clearAppData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys()
      if (keys && keys.length > 0) {
        await AsyncStorage.multiRemove(keys)
        setReads([])
      }
    } catch (error) {
      showMessage({
        message: 'تعذر حذف القراءة',
        type: 'danger',
        duration: 2500,
      })
    }
  }

  const renderItem = ({ item }) => (
    <Suspense fallback={<SavedReadFallback />}>
      <SavedReadItem key={item.date} readInfo={item} onLoadRead={() => loadSavedReadHandler(item.date)} onDeleteRead={() => deleteReadHandler(item.date)} />
    </Suspense>
  )

  if (readStart) {
    return (
      <>
        <View style={savedReadsStyles.buttonContainer}>
          <Pressable
            style={[
              buttons.width300,
              buttons.padding,
              buttons.dark,
              buttons.medium,
              buttons.rounded,
              buttons.centered,
            ]}
            onPress={() => backToListHandler()}
          >
            <Text style={buttons.mainText}>
              العودة الى القراءات المحفوظة
            </Text>
          </Pressable>
        </View>
        <Suspense fallback={<Text>تحميل ...</Text>}>
          <Reader />
        </Suspense>
      </>
    )
  }

  if (!reads) {
    return (
      <LoadingBox loadingMessage="تحميل..." size={50} />
    )
  }

  return (
    <View style={layoutStyles.cover}>
      <View style={layoutStyles.page}>
        <PageTitle
          title="يمكنك حفظ 10 قراءات"
          subTitle={null}
          marginTop={1}
          marginBottom={10}
        />
        <FlatList
          style={{ width: '100%' }}
          columnWrapperStyle={{ flexDirection: 'column' }}
          data={reads}
          renderItem={renderItem}
          ListEmptyComponent={(
            <View style={savedReadsStyles.noReadsMessageContainer}>
              <Text style={savedReadsStyles.noReadsMessageText}>
                لا توجد قراءات محفوظة
              </Text>
            </View>
          )}
          numColumns={3}
        />
        {reads && reads.length > 1 && (
          <Pressable
            style={[
              buttons.width300,
              buttons.padding,
              buttons.dark,
              buttons.medium,
              buttons.rounded,
              buttons.centered,
            ]}
            onPress={() => clearAppData()}
          >
            <Text style={buttons.mainText}>
              مسح الكل
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}

SavedReads.defaultProps = {
  navigation: null,
}

SavedReads.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.func),
  onLoadRead: PropTypes.func.isRequired,
  onClearReader: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  onLoadRead: loadedRead => dispatch(actions.loadSavedRead(loadedRead)),
  onClearReader: () => dispatch(actions.clearReader()),
})

export default connect(null, mapDispatchToProps)(SavedReads)
