import { createExtension, createTerminal, getConfiguration, registerCommand } from '@vscode-use/utils'

export = createExtension(async () => {
  registerCommand('simon-code-runner.runFileInTerminal', (e) => {
    const path = e.path
    if (!path)
      return
    const { js, ts } = getConfiguration('simon-code-runner.runEnv')

    const terminal = getTerminal()

    terminal.sendText('clear')
    if (path.endsWith('.ts')) {
      terminal.sendText(`${ts} ${path}`)
    }
    else if (path.endsWith('.js')) {
      terminal.sendText(`${js} ${path}`)
    }
    terminal.show()
  })
}, () => disposeTerminal())

let terminal: any

function getTerminal() {
  if (terminal) {
    if (!terminal.exitStatus)
      return terminal
    terminal.dispose()
  }

  terminal = createTerminal('Code')
  return terminal
}

function disposeTerminal() {
  terminal.dispose()
}
