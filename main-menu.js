const { app, Menu } = require('electron');
const isWindows = process.platform == 'win32';

module.exports = {
    setMainMenu
}

function setMainMenu() {
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
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}