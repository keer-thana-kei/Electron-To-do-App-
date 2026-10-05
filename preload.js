// const { contextBridge, ipcRenderer } = require('electron');

// contextBridge.exposeInMainWorld('electronAPI', {
//   loadTodos: () => ipcRenderer.invoke('load-todos'),
//   saveTodos: (todos) => ipcRenderer.invoke('save-todos', todos)
// });


const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  loadTodos: () => ipcRenderer.invoke('load-todos'),
  saveTodos: (todos) => ipcRenderer.invoke('save-todos', todos),
  minimizeWindow: () => ipcRenderer.send('minimize-window'),
  maximizeWindow: () => ipcRenderer.send('maximize-window'),
  closeWindow: () => ipcRenderer.send('close-window')
}); 