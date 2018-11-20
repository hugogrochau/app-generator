import { Element, ComponentName } from '../types'
import { executeTemplate } from '../templates'

export const elementToComponentMap = {
  [ComponentName.uiText]: 'Text',
  [ComponentName.uiImage]: 'Image',
  [ComponentName.layoutBox]: 'Box',

  [ComponentName.uiButton]: 'Undefined',
  [ComponentName.uiTextInput]: 'Undefined',
  [ComponentName.uiTextArea]: 'Undefined',
  [ComponentName.navigationLink]: 'Undefined',
  [ComponentName.navigationButton]: 'Undefined'
}

export const generateElement = (element: Element) => {
  const { name, props, style } = element

  const componentName = elementToComponentMap[name]
  const generatedElement = executeTemplate('leafElement', { name: componentName, props, style })

  return generatedElement
}
