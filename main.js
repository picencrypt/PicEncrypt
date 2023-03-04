const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 800,
    icon:'./build/icons/default.png',
    title:"PicEncrypt",
icon: './icon/favicon.ico',
  })
  
  win.loadFile('app.html')
}

app.whenReady().then(() => {
  createWindow()
})
const electron = require('electron')

const Menu = electron.Menu

Menu.setApplicationMenu(null)
