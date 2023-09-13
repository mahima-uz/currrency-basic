const {app, BrowserWindow, menu, Menu} = require('electron');

//create main ui window
const createWindow = () => {
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true, // This allows you to use Node.js modules in the renderer process.
          },
    });

    //build menu from template
    // const menu = Menu.buildfromTemplate(menuTemplate)
    // //insert menu
    // Menu.setApplicationMenu(menu);

    window.loadFile('index.html')
}

//ready handle

app.whenReady().then(() => {
    createWindow();
})


const menuTemplate = [
    {
        label: "File",
        submenu: [
            {
                label: "Quit",
                accelerator: process.platform === 'darwin'? "Command+Q": "Ctrl+Q",
                click() {
                    app.quit();
                }
            },
            {
                role: "reload"
            }
        ]
    }
]