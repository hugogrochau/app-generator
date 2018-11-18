import fs from 'fs-extra'
import path from 'path'

export const getDirectoryFullPath = (receivedPath: string) => path.join(process.cwd(), receivedPath)

export const createDirectory = (directoryPath: string, force?: boolean) => {
  if (force) {
    fs.removeSync(directoryPath)
  }

  if (fs.existsSync(directoryPath)) {
    throw new Error(`Directory ${getDirectoryFullPath(directoryPath)} already exists`)
  }

  fs.mkdirSync(directoryPath)
}

export const copyDirectoryContent = (sourceDirectory: string, destinationDirectory: string) => {
  if (!fs.existsSync(sourceDirectory)) {
    throw new Error(`Source directory ${getDirectoryFullPath(sourceDirectory)} doesn't exist`)
  }

  if (!fs.existsSync(destinationDirectory)) {
    throw new Error(`Destination directory ${getDirectoryFullPath(sourceDirectory)} doesn't exit`)
  }

  fs.copySync(sourceDirectory, destinationDirectory)
}

export const readAsJson = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${getDirectoryFullPath(filePath)} does not exist`)
  }

  return JSON.parse(fs.readFileSync(filePath, 'utf8'))
}

export const read = (filePath: string) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${getDirectoryFullPath(filePath)} does not exist`)
  }

  return fs.readFileSync(filePath, 'utf8')
}

export const write = (filePath: string, content: string) => {
  fs.writeFileSync(filePath, content)
}
