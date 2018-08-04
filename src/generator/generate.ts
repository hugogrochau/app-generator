import { logger } from '../logger'
import { createDirectory, copyDirectoryContent } from '../fileUtils'
import { options } from '../options'

export const generate = (templatePath: string, outputDirectoryPath: string) => {
  logger.debug(`Generating from template ${templatePath} into ${outputDirectoryPath}`)
  try {
    createDirectory(outputDirectoryPath, options.force)
    copyDirectoryContent('assets/baseProject', outputDirectoryPath)

  } catch (err) {
    logger.error(err.message)
  }
}
