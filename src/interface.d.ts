/**
 * 参考：https://www.electronjs.org/ja/docs/latest/tutorial/context-isolation#typescript-との連携
 */
export interface IAPI {
  selectReplayDirectory: () => Promise<string | null>
  readDirectoryFiles: (folderSyncSetting: FolderSyncSetting) => Promise<[string[], number]>
  readReplayFile: (
    folderSyncSetting: FolderSyncSetting,
    replayFilePath: string,
  ) => Promise<[Buffer, string, number] | null>
}

declare global {
  interface Window {
    api: IAPI
  }
}
