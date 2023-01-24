const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon:'./build/icons/default.png',
    title:"PicEncrypt",
  })
  
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})
const electron = require('electron')

const Menu = electron.Menu

Menu.setApplicationMenu(null)
