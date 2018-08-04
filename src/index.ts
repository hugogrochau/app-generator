import commander from 'commander'

import { logger } from './logger'
import { generate } from './generator/generate'

const VERSION = '0.0.1'
commander.version(VERSION)
  .arguments('<input> [output]')
  .option('-i --input <file>', 'Input template')
  .option('-o --output <directory>', 'Destination directory')
  .option('-v --verbose', 'Verbose log')
  .parse(process.argv)

if (commander.verbose) {
  process.env.VERBOSE = 'true'
}

logger.debug(`Starting app generator v${VERSION}`)

const input = commander.input || commander.args[0]
const output = commander.output || commander.args[1] || 'dist'

if (!input) {
  logger.error('Input template is required')
  commander.outputHelp()
  process.exit(1)
}

generate(input, output)
