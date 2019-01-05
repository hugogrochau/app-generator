import filenamify from 'filenamify'
import { pascalize } from 'humps'

export const sanitizeFileName = (name: string) => filenamify(pascalize(name))
