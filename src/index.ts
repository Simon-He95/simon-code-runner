import { createExtension, createTerminal, getConfiguration, registerCommand } from '@vscode-use/utils'

export = createExtension(async () => {
  let terminal: any
  registerCommand('simon-code-runner.runFileInTerminal', (e) => {
    const path = e.path
    if (!path)
      return
    const { js, ts } = getConfiguration('simon-code-runner.runEnv')
    if (!terminal)
      terminal = createTerminal('Code')

    if (path.endsWith('.ts')) {
      terminal.sendText(`${ts} ${path}`)
    }
    else if (path.endsWith('.js')) {
      terminal.sendText(`${js} ${path}`)
    }
    terminal.show()
  })
})
