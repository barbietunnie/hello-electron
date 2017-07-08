const { ipcRenderer } = require('electron');

const countEl = document.querySelector('#count');

// When the window first loads, send the first request to get the window count
ipcRenderer.send('get-window-count');
ipcRenderer.on('window-count', (event, props) => {
    countEl.textContent = props.count;
})

document.querySelector('#new-window').addEventListener('click', () => {
    console.log('Button clicked');
    ipcRenderer.send('create-window', {x: 0, y: 0});  
});