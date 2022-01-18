const {app, BrowserWindow,ipcMain} = require('electron')

app.on('ready',() =>{
  const mainWindow = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
      nodeIntegration:true,
      // 这个main的renderer process可以使用node api
      contextIsolation:false
    }
  })
  mainWindow.loadFile('index.html')
  ipcMain.on('message',(event,org )=>{
    console.log(org)
    event.sender.send('reply','halo nejet')
  })
})