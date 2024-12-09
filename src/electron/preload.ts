import { contextBridge, ipcRenderer } from 'electron'
import { IPC_CHANNELS } from './ipcChannels'
import type { FolderSyncSetting } from '../shared/types/app'

contextBridge.exposeInMainWorld('api', {
  /**
   * リプレイフォルダを選択する
   * @returns
   */
  selectReplayDirectory: () => ipcRenderer.invoke(IPC_CHANNELS.SELECT_REPLAY_DIRECTORY),
  /**
   * フォルダ内のファイル一覧を取得する
   * @param folderSyncSetting
   * @returns
   */
  readDirectoryFiles: (folderSyncSetting: FolderSyncSetting) =>
    ipcRenderer.invoke(IPC_CHANNELS.READ_DIRECTORY_FILES, folderSyncSetting),
  /**
   * リプレイファイルのデータを取得する
   * @param folderSyncSetting
   * @param replayFilePath
   * @returns
   */
  readReplayFile: (folderSyncSetting: FolderSyncSetting, replayFilePath: string) =>
    ipcRenderer.invoke(IPC_CHANNELS.READ_REPLAY_FILE, folderSyncSetting, replayFilePath),
})
