import path from 'path'
import { AppDeclaration } from '../types'
import { generateScreen } from './generateScreen'
import { executeTemplate } from '../templates'
import { write } from '../fileUtils'
import { sanitizeFileName } from '../sanitizeFileName'

export const generateApp = (appPath: string, appDeclaration: AppDeclaration) => {
  generateAppJson(appPath, appDeclaration)
  generatePackageJson(appPath, appDeclaration)

  const screensPath = path.join(appPath, 'src', 'screens')
  appDeclaration.screens.forEach(screen => generateScreen(screensPath, screen))
  const screenNames = appDeclaration.screens.map(s => sanitizeFileName(s.name))
  generateNavigator(appPath, screenNames, appDeclaration.name)
}

const generateNavigator = (appPath: string, screenNames: string[], appName: string) => {
  const navigatorFile = executeTemplate('Navigator.js', { screens: screenNames, appName })
  write(path.join(appPath, 'src', 'Navigator.js'), navigatorFile)

}

const generateAppJson = (appPath: string, appDeclaration: AppDeclaration) => {
  const { name, version, slug, description } = appDeclaration
  const appJsonFile = executeTemplate('app.json', { name, version, slug, description })
  write(path.join(appPath, 'app.json'), appJsonFile)
}

const generatePackageJson = (appPath: string, appDeclaration: AppDeclaration) => {
  const { slug, version, author, description } = appDeclaration
  const packageJsonFile = executeTemplate('package.json', { slug, version, author, description })
  write(path.join(appPath, 'package.json'), packageJsonFile)
}
