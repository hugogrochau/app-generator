import path from 'path'
import { extractToFolder, removeFile } from '../fileUtils'
import { logger } from '../logger'

export const generateNodeModules = async (outputDirectoryPath: string) => {
  const nodeModulesArchivePath = path.join(outputDirectoryPath, 'node_modules.tar.gz')
  await extractToFolder(nodeModulesArchivePath, path.join(outputDirectoryPath))
  removeFile(nodeModulesArchivePath)
}
