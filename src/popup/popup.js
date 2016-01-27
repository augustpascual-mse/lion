function createPopUp(){
    popUpWindow = new BrowserWindow([
        width: 640,
        height: 480,
        show : false
    ]);

    popUpWindow.loadUrl('file://' + __dirname + 'popup.html');

    popUpWindow.on('closed', function(){
        popUpWindow = null;
    })
}
