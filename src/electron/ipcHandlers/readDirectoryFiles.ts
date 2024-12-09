import { ipcMain } from 'electron'
import fs from 'fs/promises'
import path from 'path'
import type { FolderSyncSetting } from '../../shared/types/app'
import { IPC_CHANNELS } from '../ipcChannels'
import { REPLAY_FILE_NAME_PATTERNS } from './constants'

/**
 * 引数のフォルダパス内に含まれるファイルの一覧を取得する
 */
export const registerReadDirectoryFilesHandler = () => {
  ipcMain.handle(
    IPC_CHANNELS.READ_DIRECTORY_FILES,
    async (_event, folderSyncSetting: FolderSyncSetting) => {
      try {
        const files = await fs.readdir(folderSyncSetting.folderPath)

        const replayFilePattern = REPLAY_FILE_NAME_PATTERNS[folderSyncSetting.gameKey]
        if (!replayFilePattern) {
          throw new Error(`無効なゲームキー: ${folderSyncSetting.gameKey}`)
        }

        const rpyFiles = []
        for (const file of files) {
          if (!replayFilePattern.test(file)) {
            continue
          }

          const filePath = path.join(folderSyncSetting.folderPath, file)

          if (
            folderSyncSetting.syncMode === 'since_last_update' &&
            folderSyncSetting.lastUpdatedAt !== null
          ) {
            const stats = await fs.stat(filePath)
            console.log(`${filePath} の更新日時は ${stats.mtime}. 前回同期日時以前のためスキップ`)
            if (stats.mtime <= folderSyncSetting.lastUpdatedAt) {
              continue
            }
          }

          rpyFiles.push(filePath)
        }

        return [rpyFiles, files.length]
      } catch (error) {
        console.error('フォルダ内のファイル取得に失敗しました:', error)
        return [[], 0]
      }
    },
  )
}
