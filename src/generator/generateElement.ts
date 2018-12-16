import R from 'ramda'
import { Element, ComponentName, ElementProps } from '../types'
import { executeTemplate } from '../templates'

export const elementToComponentMap = {
  [ComponentName.layoutBox]: 'Box',
  [ComponentName.uiText]: 'Text',
  [ComponentName.uiImage]: 'Image',
  [ComponentName.uiButton]: 'Button',
  [ComponentName.uiTextInput]: 'TextInput',
  [ComponentName.uiTextArea]: 'TextArea',
  [ComponentName.navigationLink]: 'Link'
}

const stringifyProps = (props: ElementProps): ElementProps => {
  if (!props) {
    return {}
  }

  const stringifiedProps = R.map<ElementProps, ElementProps>(JSON.stringify, props)
  return stringifiedProps
}

export const generateElement = (element: Element, depth: number): string => {
  const { name, props: receivedProps, style, children, navigateTo } = element
  const componentName = elementToComponentMap[name]
  const indentation = ''.padStart(depth * 2)
  const formattedStyle = JSON.stringify(style)

  const props = stringifyProps(receivedProps)

  if (name === ComponentName.uiButton && navigateTo) {
    props.onPress = `() => { this.props.navigation.navigate('${navigateTo}') }`
  }

  if (!children) {
    return executeTemplate('elementWithoutChildren', { name: componentName, props, style: formattedStyle, indentation })
  }

  if (typeof children === 'string') {
    return executeTemplate('elementWithChildren', { name: componentName, props, style: formattedStyle, children: `${indentation.padStart(2)}${children}`, indentation })
  }

  const generatedChildren = children.map(c => generateElement(c, depth + 1)).join('\n')
  return executeTemplate('elementWithChildren', { name: componentName, props, style: formattedStyle, children: generatedChildren, indentation })
}
