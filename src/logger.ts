import chalk from 'chalk'

export const logger = {
  debug: (message) => console.debug(`${chalk.bold.blue('DEBUG')} ${message}`),
  info: (message) => console.info(`${chalk.bold.green('INFO')} ${message}`),
  warn: (message) => console.warn(`${chalk.bold.yellow('WARN')} ${message}`),
  error: (message) => console.error(`${chalk.bold.red('ERROR')} ${message}`)
}
