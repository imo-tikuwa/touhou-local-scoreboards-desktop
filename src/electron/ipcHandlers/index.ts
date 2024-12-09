import { registerSelectReplayDirectoryHandler } from './selectReplayDirectory'
import { registerReadDirectoryFilesHandler } from './readDirectoryFiles'
import { registerReadReplayFileHandler } from './readReplayFile'
import type { BrowserWindow } from 'electron'

/**
 * IPCハンドラを一括登録する
 */
export function registerIpcHandlers(win: BrowserWindow) {
  registerSelectReplayDirectoryHandler(win)
  registerReadDirectoryFilesHandler()
  registerReadReplayFileHandler()
}
