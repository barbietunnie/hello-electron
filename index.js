const {app, BrowserWindow} = require('electron');
const path = require('path');

let mainWindow;

const { setMainMenu } = require('./scripts/main-menu');
let windows = [];

app.on('ready', () => {
    // showWindowWithMenu();
    launchWindows();
});

function showWindowWithMenu() {
    mainWindow = new BrowserWindow( {
        show: false
    });
    mainWindow.loadURL(path.join('file://', __dirname, 'index.html'));
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
    });

    setMainMenu(mainWindow);
}

function launchWindows() {
    createWindow();
    createWindow();
}

function createWindow() {
    const win = new BrowserWindow(
        {
            height: 300,
            width: 400
        }
    );
    win.loadURL(path.join('file://', __dirname, 'process.html'));
    windows.push(win);
}