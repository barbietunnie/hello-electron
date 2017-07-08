const { app, Menu } = require('electron');
const isWindows = process.platform == 'win32';
const { showMessage } = require('./dialogs');

module.exports = {
    setMainMenu
}

function setMainMenu(mainWindow) {
    const template = [
        {
            label: isWindows ? 'File' : app.getName(),
            submenu: [
                {
                    label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
                    accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'Edit',
            submenu: [
                {role: 'undo'},
                {role: 'redo'},
                {type: 'separator'},
                {role: 'cut'},
                {role: 'copy'},
                {role: 'paste'},
                {type: 'separator'},
                {role: 'selectall'}
            ]
        },
        {
            label: 'Advanced',
            submenu: [
                {
                    label: 'Say hello',
                    click() {
                        showMessage(mainWindow);
                    }
                },
                {
                    label: 'Save Memory Usage Info',
                    click() {

                    }
                },
                {
                    label: 'Open File',
                    click() {

                    }
                },
                {type: 'separator'},
                {role: 'quit'}
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}