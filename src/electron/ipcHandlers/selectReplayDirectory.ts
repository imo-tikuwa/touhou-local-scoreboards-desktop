import { ipcMain, dialog } from 'electron'
import type { BrowserWindow } from 'electron'
import { IPC_CHANNELS } from '../ipcChannels'

/**
 * ダイアログを開き、選択したフォルダのパスを取得する
 * @param win
 */
export const registerSelectReplayDirectoryHandler = (win: BrowserWindow) => {
  ipcMain.handle(IPC_CHANNELS.SELECT_REPLAY_DIRECTORY, async () => {
    const result = await dialog.showOpenDialog(win, {
      properties: ['openDirectory'],
    })

    return result.filePaths[0] || null
  })
}
