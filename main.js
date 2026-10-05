const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

const userDataPath = app.getPath('userData');
const todosFilePath = path.join(userDataPath, 'todos.json');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 700,
    minWidth: 600,
    minHeight: 500,
    icon: path.join(__dirname, 'icon.jpg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    },
    transparent: false,
    backgroundColor: '#e0e5ec',
    frame: false,
    titleBarStyle: 'hidden'
  });

  win.loadFile('index.html');
  
  // Open DevTools in development (optional - comment out for production)
  // win.webContents.openDevTools();
}

// Handle todo operations
ipcMain.handle('load-todos', async () => {
  try {
    if (fs.existsSync(todosFilePath)) {
      const data = fs.readFileSync(todosFilePath, 'utf8');
      return JSON.parse(data);
    }
    return [];
  } catch (error) {
    console.error('Error loading todos:', error);
    return [];
  }
});

ipcMain.handle('save-todos', async (event, todos) => {
  try {
    fs.writeFileSync(todosFilePath, JSON.stringify(todos, null, 2));
    return { success: true };
  } catch (error) {
    console.error('Error saving todos:', error);
    return { success: false, error: error.message };
  }
});

// Window control handlers
ipcMain.on('minimize-window', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.minimize();
});

ipcMain.on('maximize-window', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) {
    if (win.isMaximized()) {
      win.unmaximize();
    } else {
      win.maximize();
    }
  }
});

ipcMain.on('close-window', () => {
  const win = BrowserWindow.getFocusedWindow();
  if (win) win.close();
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});