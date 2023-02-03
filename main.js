const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 600,
    icon:'./build/icons/default.png',
    title:"PicEncrypt",
    frame: false,
resizable: false,
  })
  
  win.loadFile('main.html')
}

app.whenReady().then(() => {
  createWindow()
})
const electron = require('electron')

const Menu = electron.Menu

Menu.setApplicationMenu(null)
