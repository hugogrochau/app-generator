import path from 'path'
import R from 'ramda'
import { Screen, Element, ComponentName } from '../types'
import { executeTemplate } from '../templates'
import { write } from '../fileUtils'
import { generateElement, elementToComponentMap } from './generateElement'

export const generateScreen = (screensPath: string, screen: Screen) => {
  const { name, children } = screen

  const childrenToRender = children.map(c => generateElement(c, 2)).join('\n')
  const componentNames = getUsedComponents(children).map(c => elementToComponentMap[c])

  const screenFile = executeTemplate('component.js', { name, children: childrenToRender, components: componentNames })
  write(path.join(screensPath, `${name}.js`), screenFile)
}

const getUsedComponents = (children: Element[] | string | null): ComponentName[] => {
  if (!children || typeof children === 'string' || !children.length) {
    return []
  }

  const rootUsedComponents = children.map(c => c.name)
  const childrenUsedComponents = R.flatten<ComponentName>(children.map(c => getUsedComponents(c.children)))

  return R.uniq<ComponentName>([...rootUsedComponents, ...childrenUsedComponents])
}
