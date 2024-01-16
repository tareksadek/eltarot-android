import React from 'react'
import PropTypes from 'prop-types'

import {
  View,
  Image,
  TouchableOpacity,
  Modal,
  Dimensions,
  Text,
} from 'react-native'

import { zoomImageStyles } from './styles'

const ZoomImage = ({
  modalVisible,
  hideImage,
  source,
  cardName,
}) => {
  const win = Dimensions.get('window')
  const imageWidth = win.width - 40
  const imageHeight = imageWidth + ((imageWidth * 61) / 100)

  return (
    <Modal
      animationType="slide"
      visible={modalVisible}
      transparent={false}
      style={zoomImageStyles.modal}
    >
      <View style={zoomImageStyles.centeredView}>
        <View>
          <View style={zoomImageStyles.cardImageCover}>
            <Text style={zoomImageStyles.cardName}>{cardName}</Text>
            <TouchableOpacity onPress={hideImage}>
              <Image
                style={[
                  zoomImageStyles.cardImage,
                  {
                    width: imageWidth,
                    height: imageHeight,
                  },
                ]}
                source={{
                  uri: `https://eltarot.app/assets/images/cards/${source}`,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

ZoomImage.defaultProps = {
  source: null,
  modalVisible: false,
  cardName: null,
}

ZoomImage.propTypes = {
  modalVisible: PropTypes.bool,
  hideImage: PropTypes.func.isRequired,
  source: PropTypes.string,
  cardName: PropTypes.string,
}

export default ZoomImage
