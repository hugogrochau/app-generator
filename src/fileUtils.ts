import fs from 'fs-extra'
import path from 'path'

export const getDirectoryFullPath = (receivedPath: string) => path.join(process.cwd(), receivedPath)

export const createDirectory = (directoryPath: string) => {
  if (fs.existsSync(directoryPath)) {
    throw new Error(`Directory ${getDirectoryFullPath(directoryPath)} already exists`)
  }

  fs.mkdirSync(directoryPath)
}

export const copyDirectoryContent = (sourceDirectory: string, destinationDirectory: string) => {
  if (!fs.existsSync(sourceDirectory)) {
    throw new Error(`Source directory ${getDirectoryFullPath(sourceDirectory)} already exists`)
  }

  if (!fs.existsSync(destinationDirectory)) {
    throw new Error(`Destination directory ${getDirectoryFullPath(sourceDirectory)} already exists`)
  }

  fs.copySync(sourceDirectory, destinationDirectory)
}
