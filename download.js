browser.runtime.onMessage.addListener(request => {
    if(request.download == "true")
        checkAndDownload();
});

function checkAndDownload() {
    // If transcript is already open
    if (document.querySelectorAll('.segment').length){
        download();
    }
    else{
        document.querySelector('.ytd-video-primary-info-renderer > #button > #button > .style-scope').click();
    
        setTimeout(() => {
            document.querySelector('.ytd-menu-service-item-renderer:nth-child(2)').click();
        }, 2000);
    
        setTimeout(download, 10000);
    }
}


function download() {
    var transcript = '';
    navigator.clipboard.writeText("")
    timestamps = document.querySelectorAll('.segment-timestamp');
    texts = document.querySelectorAll('.segment-text');
    linesCount = timestamps.length;
    for (let i = 0; i < linesCount ; i++){
        transcript = transcript + timestamps[i].innerText + ' - ' + texts[i].innerText + '\n';
    }
    console.log(transcript);
    navigator.clipboard.writeText(transcript);
}

