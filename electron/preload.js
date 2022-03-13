const { ipcRenderer, contextBridge } = require("electron");
const os = require("os");

// api containing functions and values
const API = {
    window: {
        // recent: () => ipcRenderer.send("app/close"),
        minimize: () => ipcRenderer.send("app/minimize"),
        maximize: () => ipcRenderer.send("app/maximize"),
        close: () => ipcRenderer.send("app/close"),
    }
}

// window.api; //to give access to the subject
contextBridge.exposeInMainWorld("app", API);