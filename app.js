
// don't convert to ES module like vscode wants to, it could mess you up
const { app, BrowserWindow } = require('electron');

let mainWindow

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadFile("dist/webstackr/index.html");

    // Open the DevTools (optional)
    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null;
    });
}

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.whenReady().then(() => {
    createWindow();
});

// Create a new window when the app is activated (e.g., clicking the Dock icon on macOS)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});