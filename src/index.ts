import { logger } from './logger'
import commander from 'commander'

const VERSION = '0.0.1'
commander.version(VERSION)
  .arguments('<input> [output]')
  .option('-i --input <file>', 'Input template')
  .option('-o --output <directory>', 'Destination directory')
  .option('-v --verbose', 'Verbose log')
  .parse(process.argv)

console.log('commander.verbose', commander.verbose)
if (commander.verbose) {
  process.env.VERBOSE = 'true'
}

logger.debug(`Starting app generator v${VERSION}`)

const input = commander.input || commander.args[0]
const output = commander.output || commander.args[1] || 'dist'

if (!input) {
  logger.error('Input required')
  commander.outputHelp()
  process.exit(1)
}

console.log('output', output)
