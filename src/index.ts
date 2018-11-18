import commander from 'commander'

import { logger } from './logger'
import { generate } from './generator/generate'
import { options } from './options'
import { compileTemplates } from './templates'

const VERSION = '0.0.1'
commander.version(VERSION)
  .arguments('<input> [output]')
  .option('--input <file>', 'Input template')
  .option('--output <directory>', 'Destination directory')
  .option('-v --verbose', 'Verbose log')
  .option('-f --force', 'Force overwrite')
  .parse(process.argv)

if (commander.verbose) {
  options.verbose = true
}

if (commander.force) {
  options.force = true
}

logger.debug(`Starting app generator v${VERSION}`)

const input = commander.input || commander.args[0]
const output = commander.output || commander.args[1] || 'dist'

if (!input) {
  logger.error('Input template is required')
  commander.outputHelp()
  process.exit(1)
}

compileTemplates()

generate(input, output)
