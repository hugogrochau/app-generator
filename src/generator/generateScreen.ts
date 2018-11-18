import path from 'path'
import { Screen } from '../types'
import { executeTemplate } from '../templates'
import { write } from '../fileUtils'

export const generateScreen = (screensPath: string, screen: Screen) => {
  const { name, children } = screen

  const screenFile = executeTemplate('basicComponent.js', { name, children })
  write(path.join(screensPath, `${name}.js`), screenFile)
}
