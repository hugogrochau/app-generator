import path from 'path'
import { logger } from '../logger'
import { createDirectory, copyDirectoryContent, readAsJson } from '../fileUtils'
import { generateApp } from './generateApp'
import { AppDeclaration } from '../types'

export const generate = (templatePath: string, outputDirectoryPath: string) => {
  logger.debug(`Generating from template ${templatePath} into ${outputDirectoryPath}`)
  try {
    createDirectory(outputDirectoryPath, true)
    copyDirectoryContent(path.join('assets', 'baseProject'), outputDirectoryPath)

    const appDeclaration = readAsJson(templatePath) as AppDeclaration
    generateApp(outputDirectoryPath, appDeclaration)
  } catch (err) {
    logger.error(err.message)
  }
}
