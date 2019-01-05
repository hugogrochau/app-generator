import React from 'react'
import { TextInput } from 'react-native'

const TextArea = (props) => (
  <TextInput
    multiline={true}
    numberOfLines={4}
    {...props}
  />
)

export default TextArea
