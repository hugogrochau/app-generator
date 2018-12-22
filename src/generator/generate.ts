import path from 'path'
import { logger } from '../logger'
import { createDirectory, copyDirectoryContent, readAsJson } from '../fileUtils'
import { generateApp } from './generateApp'
import { generateNodeModules } from './generateNodeModules'
import { AppDeclaration } from '../types'

export const generate = async (templatePath: string, outputDirectoryPath: string) => {
  logger.info(`Generating from template ${templatePath} into ${outputDirectoryPath}`)

  logger.info('Copying base project...')
  createDirectory(outputDirectoryPath, true)
  copyDirectoryContent(path.join('assets', 'baseProject'), outputDirectoryPath)

  logger.info('Extracting libraries...')
  await generateNodeModules(outputDirectoryPath)

  logger.info('Generating app...')
  const appDeclaration = readAsJson(templatePath) as AppDeclaration
  generateApp(outputDirectoryPath, appDeclaration)
}
