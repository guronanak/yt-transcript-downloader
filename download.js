browser.runtime.onMessage.addListener(request => {
    if(request.download == "true")
        checkAndDownload();
});

function checkAndDownload() {
    // If transcript is already open
    if (document.querySelectorAll('.cue').length){
        download();
    }
    else{
        document.querySelector('ytd-menu-renderer.ytd-video-primary-info-renderer > yt-icon-button:nth-child(2) > button:nth-child(1)').click();
    
        setTimeout(() => {
            document.querySelector('ytd-menu-service-item-renderer.style-scope:nth-child(2)').click();
        }, 2000);
    
        setTimeout(download, 10000);
    }
}


function download() {
    var transcript = '';
    document.querySelectorAll('.cue').forEach(function (item, index) {
        transcript = transcript + ' ' + item.innerText;
    })
    console.log(transcript);
    navigator.clipboard.writeText(transcript);
}
