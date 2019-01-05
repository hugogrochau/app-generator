import React from 'react'
import { Button as RNButton } from 'react-native'

const Button = ({ text, ...otherProps}) => (
  <RNButton title={text} {...otherProps} />
)

export default Button
