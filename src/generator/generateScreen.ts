import path from 'path'
import { Screen } from '../types'
import { executeTemplate } from '../templates'
import { write } from '../fileUtils'
import { generateElement } from './generateElement'

export const generateScreen = (screensPath: string, screen: Screen) => {
  const { name, children } = screen

  const childrenToRender = children.map(generateElement).join('\n')

  const screenFile = executeTemplate('basicComponent.js', { name, children: childrenToRender })
  write(path.join(screensPath, `${name}.js`), screenFile)
}
