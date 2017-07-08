const { ipcRenderer } = require('electron');

const btnEl = document.querySelector('#new-window');
btnEl.addEventListener('click', () => {
    console.log('Button clicked');
    ipcRenderer.send('create-window');

    
});