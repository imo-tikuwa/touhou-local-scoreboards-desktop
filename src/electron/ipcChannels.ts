/**
 * ipcHandlers ディレクトリ内の各IPCハンドラと preload.ts を紐づけるチャンネル名称のマッピング
 */
export const IPC_CHANNELS = {
  SELECT_REPLAY_DIRECTORY: 'select-replay-directory',
  READ_DIRECTORY_FILES: 'read-directory-files',
  READ_REPLAY_FILE: 'read-replay-file',
}
