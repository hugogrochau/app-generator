import React from 'react'
import { Image as RNImage } from 'react-native'

const Image = ({ src, ...otherProps }) => (
  <RNImage source={{ uri: src }} {...otherProps} />
)

export default Image
