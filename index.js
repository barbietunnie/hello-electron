const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

let mainWindow;

const { setMainMenu } = require('./scripts/main-menu');
const windows = [];

app.on('ready', () => {
    // showWindowWithMenu();
    // launchWindows();
    interProcessCommunication();
    ipcMain.on('create-window', () => createBrowserWindow()); // can only listen when the app is ready
});

function interProcessCommunication() {
    createBrowserWindow();
}

function showWindowWithMenu(htmlFile) {
    mainWindow = new BrowserWindow( {
        show: false
    });
    mainWindow.loadURL(path.join('file://', __dirname, htmlFile ? htmlFile : 'index.html'));
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });

    setMainMenu(mainWindow);
}

function launchWindows() {
    createBrowserWindow();
    createBrowserWindow();
}

function createBrowserWindow(browserWindowOptions) { 
    let win = new BrowserWindow(
        Object.assign(
            {
                height: 300,
                width: 400
            }, 
            browserWindowOptions)
    );
    win.loadURL(path.join('file://', __dirname, 'interprocess.html'));
    win.on('close', () => {
        windows.splice(windows.indexOf(win), 1);
    });
    windows.push(win);

    // win.show();
}