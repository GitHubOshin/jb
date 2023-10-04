import { program } from 'commander'
import { serveCommand } from './commands/serve'

console.log('cli log')
program.addCommand(serveCommand)

program.parse(process.argv)
