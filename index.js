var app = require('app');
var ipc = require('ipc');
var BrowserWindow = require('browser-window');

app.on('ready', function(){
    var mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    })
    mainWindow.loadUrl('file://' + __dirname + '/src/index/index.html');
    mainWindow.openDevTools();
})

ipc.on('open-popup', function(){
    if(!popUpWindow){
        createPopUp();
    }
    return (!popUpWindow.isClosed() && popUpWindow.isVisible()) ? popUpWindow.hide() : popUpWindow.show();
})
