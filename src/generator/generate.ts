import { logger } from '../logger'
import { createDirectory, copyDirectoryContent } from '../fileUtils'

export const generate = (inputFilePath: string, outputDirectoryPath: string) => {
  console.log('inputFilePath', inputFilePath)
  try {
    createDirectory(outputDirectoryPath)
    copyDirectoryContent('assets/baseProject', outputDirectoryPath)

  } catch (err) {
    logger.error(err.message)
  }
}
