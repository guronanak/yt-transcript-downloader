browser.browserAction.onClicked.addListener(function () {
    browser.tabs.query({ 
        active: true, 
        currentWindow: true 
    }).then(sendMessageToTab);
});

function sendMessageToTab(tabs) {
    browser.tabs.sendMessage(
        tabs[0].id,
        { 
            download: "true" 
        }
    )
    
}