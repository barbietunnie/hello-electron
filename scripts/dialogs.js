const { app, dialog, nativeImage } = require('electron');
const fs = require('fs');
const path = require('path');

function showMessage(browserWindow) {
    dialog.showMessageBox(browserWindow, {
        type: 'info',
        icon: nativeImage.createFromPath('./assets/leaf.png'),
        message: 'Hello',
        detail: 'Just a friendly meow.',
        buttons: ['Meow', 'Close'],
        defaultId: 0
    }, (clickedIndex) => {
        console.log(clickedIndex);
    });
}

module.exports = {
    showMessage
};