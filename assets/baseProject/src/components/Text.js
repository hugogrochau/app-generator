import React from 'react'
import { Text as RNText } from 'react-native'

const Text = ({ text, ...otherProps }) => (
  <RNText {...otherProps}>{text}</RNText>
)

export default Text
