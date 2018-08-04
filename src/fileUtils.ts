import fs from 'fs'
import path from 'path'

export const getFullDirectory = (receivedPath: string) => path.join(process.cwd(), receivedPath)

export const createOutputDirectory = (directoryPath: string) => {
  if (fs.existsSync(directoryPath)) {
    throw new Error(`Directory ${getFullDirectory(directoryPath)} already exists`)
  }

  fs.mkdirSync(directoryPath)
}
