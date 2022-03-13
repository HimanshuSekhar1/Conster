
const { app, BrowserWindow, ipcMain } = require("electron"); // starting point of the application

const { join } = require("path"); // this will load the html file into the BrowserWindow

app.whenReady().then(main); // this will help in calling the main function to start the app

// runs when electron is ready
function main() {
    // create a window and load a html file to be rendered
    const window = new BrowserWindow({
        width: 800, height: 700,
        // other window settings will go here
        show: false, //makes app startup smooth
        autoHideMenuBar: true, //will hide the default menubar
        frame: false, // removes the title bar of app
        webPreferences: {
            preload: join(__dirname, "./preload.js"), //this will help in showing up preload in browser window
        }
    });

    // load the svelte app inside a chromium window(show the index.html file inside directory)
    window.loadFile(join(__dirname, "../public/index.html"));
    
    window.on("ready-to-show", window.show); //makes app startup smooth

}

ipcMain.on("app/minimize", () => {
    window.minimize();
});

ipcMain.on("app/maximize", () => {
    window.maximize();
});

ipcMain.on("app/close", () => {
    app.quit();
});