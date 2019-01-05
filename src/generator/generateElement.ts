import R from 'ramda'
import { StyleSheet } from 'react-native'
import { Element, ComponentName, ElementProps } from '../types'
import { executeTemplate } from '../templates'
import { sanitizeFileName } from '../sanitizeFileName'

export const elementToComponentMap = {
  [ComponentName.layoutBox]: 'Box',
  [ComponentName.uiText]: 'Text',
  [ComponentName.uiImage]: 'Image',
  [ComponentName.uiButton]: 'Button',
  [ComponentName.uiTextInput]: 'TextInput',
  [ComponentName.uiTextArea]: 'TextArea'
}

const stringifyProps = (props: ElementProps): ElementProps => {
  if (!props) {
    return {}
  }

  const filteredProps = R.filter<ElementProps>(p => Boolean(p), props)
  const stringifiedProps = R.map<ElementProps, ElementProps>(JSON.stringify, filteredProps)

  return stringifiedProps
}

const stringifyStyle = (style: StyleSheet.NamedStyles<any>) => {
  if (!style) {
    return {}
  }

  const filteredStyle = R.filter(s => Boolean(s), style)
  const stringifiedStyles = JSON.stringify(filteredStyle)

  return stringifiedStyles
}

export const generateElement = (element: Element, depth: number): string => {
  const { name, props: receivedProps, style: receivedStyle, children, navigation } = element
  const componentName = elementToComponentMap[name]
  const indentation = ''.padStart(depth * 2)

  const style = stringifyStyle(receivedStyle)
  const props = stringifyProps(receivedProps)

  if (name === ComponentName.uiButton) {
    if (navigation && navigation.to) {
      props.onPress = `() => { props.navigation.navigate('${sanitizeFileName(navigation.to)}') }`
    } else {
      props.onPress = 'f => f'
    }
  }

  if (!children) {
    return executeTemplate('elementWithoutChildren', { name: componentName, props, style, indentation })
  }

  const generatedChildren = children.map(c => generateElement(c, depth + 1)).join('\n')
  return executeTemplate('elementWithChildren', { name: componentName, props, style, children: generatedChildren, indentation })
}
