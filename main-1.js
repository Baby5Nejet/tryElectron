// 双窗口，使用node api 弹窗


const {app, BrowserWindow} = require('electron')

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
  // 载入html
  const secondWindow = new BrowserWindow({
    width:300,
    height:300,
    webPreferences:{
      nodeIntegration:true,
      contextIsolation:false
      // 想让renderer.js中使用node api必须加这个
    },
    parent:mainWindow
    // 定义父窗口，父窗口关闭的时候子窗口也会跟着关闭
  })
  secondWindow.loadFile('second.html')
  // 载入html
})