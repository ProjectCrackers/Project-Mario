import { app, BrowserWindow, protocol, ipcMain } from 'electron';
// import path from 'path';
// import fs from 'fs';
// import init from electron-compile
import { init as initCompiler } from 'electron-compile';

if (require('electron-squirrel-startup')) { 
    app.quit();
}

let mainWindow;

const createWindow = (url) => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webviewTag: true,
            preload: `file:///${__dirname}/public/preload.js`,
        },
    });

    mainWindow.loadURL(url || `file:///${__dirname}/public/index.html`);
    //mainWindow.webContents.openDevTools();

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
};

app.on('ready', async () => {
    // Initialize the compiler
    await initCompiler();

    createWindow(`file:///${__dirname}/public/index.html`);
});

ipcMain.handle('prompt', async (event, message) => {
  const { response, checkboxChecked } = await dialog.showMessageBox(mainWindow, {
      type: 'question',
      buttons: ['OK', 'Cancel'],
      defaultId: 0,
      title: 'Prompt',
      message: message,
      detail: 'Enter text:',
      checkboxLabel: 'Text:',
      checkboxChecked: ''
  });

  return response === 0 ? checkboxChecked : null;
});

app.on('open-url', (event, url) => {
    event.preventDefault();
    if (mainWindow) {
        mainWindow.loadURL(url);
    } else {
        createWindow(url);
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});