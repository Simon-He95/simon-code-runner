import { createExtension, createTerminal, registerCommand } from '@vscode-use/utils'

export = createExtension(async () => {
  let terminal: any
  const runEnv = 'bun'
  registerCommand('simon-code-runner.runFileInTerminal', (e) => {
    const path = e.path
    if (!path)
      return
    if (!terminal)
      terminal = createTerminal('Code')

    if (path.endsWith('.ts')) {
      terminal.sendText(`${runEnv} ${path}`)
    }
    else if (path.endsWith('.js')) {
      terminal.sendText(`${runEnv} ${path}`)
    }
    terminal.show()
  })
}, () => {

})
