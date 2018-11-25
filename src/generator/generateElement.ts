import { Element, ComponentName } from '../types'
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

export const generateElement = (element: Element, depth: number): string => {
  const { name, props, style, children } = element
  const componentName = elementToComponentMap[name]
  const indentation = ''.padStart(depth * 2)
  const formattedStyle = JSON.stringify(style)

  if (!children) {
    return executeTemplate('elementWithoutChildren', { name: componentName, props, style: formattedStyle, indentation })
  }

  if (typeof children === 'string') {
    return executeTemplate('elementWithChildren', { name: componentName, props, style: formattedStyle, children: `  ${indentation}${children}`, indentation })
  }

  const generatedChildren = children.map(c => generateElement(c, depth + 1)).join('\n')
  return executeTemplate('elementWithChildren', { name: componentName, props, style: formattedStyle, children: generatedChildren, indentation })
}
