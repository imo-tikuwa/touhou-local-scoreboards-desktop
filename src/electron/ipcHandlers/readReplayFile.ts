import { ipcMain } from 'electron'
import fs from 'fs/promises'
import path from 'path'
import type { FolderSyncSetting } from '../../shared/types/app'
import { IPC_CHANNELS } from '../ipcChannels'
import { REPLAY_FILE_NAME_PATTERNS } from './constants'

/**
 * リプレイファイルのデータを取得する
 */
export const registerReadReplayFileHandler = () => {
  ipcMain.handle(
    IPC_CHANNELS.READ_REPLAY_FILE,
    async (_event, folderSyncSetting: FolderSyncSetting, replayFilePath: string) => {
      try {
        const replayFilePattern = REPLAY_FILE_NAME_PATTERNS[folderSyncSetting.gameKey]
        if (!replayFilePattern) {
          throw new Error(`無効な作品キー: ${folderSyncSetting.gameKey}`)
        }

        const fileName = path.basename(replayFilePath)
        if (!replayFilePattern.test(fileName)) {
          throw new Error(`リプレイファイル名が正規表現に一致しません: ${fileName}`)
        }

        const fileBuffer = await fs.readFile(replayFilePath)

        const fileStat = await fs.stat(replayFilePath)
        const fileSize = fileStat.size

        return [fileBuffer, fileName, fileSize] as [Buffer, string, number]
      } catch (error) {
        console.error('リプレイファイルのデータ取得に失敗しました:', error)
        return null
      }
    },
  )
}
