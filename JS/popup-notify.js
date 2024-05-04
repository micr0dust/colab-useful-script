var popupCheckInterval = setInterval(function() {
    let popup = document.querySelector('body > mwc-dialog');
    if (popup) {
        let style = window.getComputedStyle(popup);
        if (style.display !== 'none' && style.visibility !== 'hidden') {
            notify('https://github.com/micr0dust/colab-useful-script/raw/main/sound/Requires_Skilled_Engineers.mp3?raw=true')
            clearInterval(popupCheckInterval);
        }
    }
}, 1000);
function notify(url) {
    var audioElement = document.createElement('audio');
    audioElement.src = url;
    audioElement.autoplay = true;
    audioElement.loop = false;
    document.body.appendChild(audioElement);
}