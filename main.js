const { app, BrowserWindow, ipcMain } = require('electron')


const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  win.loadFile('secenek.html')

  const contents = win.webContents
  console.log(contents)


  //yeni pencere  
  ipcMain.on("key:newWindow", () => {
    createNewWindow();
  })

  win.on("close", () => {
    app.quit();
  })

  ipcMain.on("pencere:close", () => {
    addWindow.close();
    addWindow = null;
  });


}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

let addWindow;
function createNewWindow() {
  addWindow = new BrowserWindow({
    width: 482,
    height: 215,
    frame: false,
    title: "sil penceresi",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    }
  })

  addWindow.loadFile('pencere.html')

  addWindow.on("close", () => {
    addWindow = null;
  })
}



