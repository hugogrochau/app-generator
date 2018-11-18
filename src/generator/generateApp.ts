import path from 'path'
import { AppDeclaration } from '../types'
import { generateScreen } from './generateScreen'
import { executeTemplate } from '../templates'
import { write } from '../fileUtils'

export const generateApp = (appPath: string, appDeclaration: AppDeclaration) => {
  const { name, version, slug, description, screens } = appDeclaration
  const appJsonData = { name, version, slug, description }
  const appJsonFile = executeTemplate('app.json', appJsonData)
  write(path.join(appPath, 'app.json'), appJsonFile)

  const screensPath = path.join(appPath, 'screens')
  screens.forEach(screen => generateScreen(screensPath, screen))
}
