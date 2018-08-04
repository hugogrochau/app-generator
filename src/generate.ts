import { logger } from './logger'
import { createOutputDirectory } from './fileUtils'

export const generate = (inputFilePath: string, outputDirectoryPath: string) => {
  console.log('inputFilePath', inputFilePath)
  try {
    createOutputDirectory(outputDirectoryPath)
  } catch (err) {
    logger.error(err.message)
  }
}
