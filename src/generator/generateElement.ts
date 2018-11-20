import { Element, ComponentName } from '../types'
import { executeTemplate } from '../templates'

export const elementToComponentMap = {
  [ComponentName.uiText]: 'Text',
  [ComponentName.uiImage]: 'Image',
  [ComponentName.layoutBox]: 'Box',

  [ComponentName.uiButton]: 'Button',
  [ComponentName.uiTextInput]: 'TextInput',
  [ComponentName.uiTextArea]: 'TextArea',
  [ComponentName.navigationLink]: 'Link'
}

export const generateElement = (element: Element, depth: number): string => {
  const { name, props, style, children } = element
  const componentName = elementToComponentMap[name]
  const indentation = ''.padStart(depth * 2)

  if (!children) {
    return executeTemplate('leafElement', { name: componentName, props, style, indentation })
  }

  if (typeof children === 'string') {
    return executeTemplate('elementWithChildren', { name: componentName, props, style, children: `  ${indentation}${children}`, indentation })
  }

  const generatedChildren = children.map(c => generateElement(c, depth + 1)).join('\n')
  return executeTemplate('elementWithChildren', { name: componentName, props, style, children: generatedChildren, indentation })
}
