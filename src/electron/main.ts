import { app, BrowserWindow, Menu } from 'electron'
import path from 'path'

function createWindow() {
  const win = new BrowserWindow({
    width: 1440,
    height: 900,
    icon: 'src/assets/logo.ico',
    webPreferences: {
      nodeIntegration: false,
    },
  })

  Menu.setApplicationMenu(null)

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
    win.webContents.openDevTools()
  } else {
    win.loadFile(path.join(app.getAppPath(), 'build', 'index.html'))
  }
}

app
  .whenReady()
  .then(createWindow)
  .catch((err) => {
    console.error('Failed to create the window:', err)
  })

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
