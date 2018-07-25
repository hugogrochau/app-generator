import chalk from 'chalk'

export const logger = {
  debug: (message: string) => console.debug(`${chalk.bold.blue('DEBUG')} ${message}`),
  info: (message: string) => console.info(`${chalk.bold.green('INFO')} ${message}`),
  warn: (message: string) => console.warn(`${chalk.bold.yellow('WARN')} ${message}`),
  error: (message: string) => console.error(`${chalk.bold.red('ERROR')} ${message}`)
}
